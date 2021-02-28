from ftplib import FTP
from threading import Thread, Event
from queue import Queue, Empty
from PIL import Image
import io


class FTPDownloader(object):
    def __init__(self, host, directory, timeout=0.01):
        print(directory)
        self.ftp = FTP(host)
        self.ftp.login()
        self.ftp.cwd('GOES/'+directory)

        self.timeout = timeout

    def getBytes(self, filename):
        print("getBytes")
        self.ftp.retrbinary("RETR {}".format(filename), self.bytes.put)
        self.bytes.join()   # wait for all blocks in the queue to be processed
        self.finished.set()  # mark streaming as finished

    def sendBytes(self):
        while not self.finished.is_set():
            try:
                yield self.bytes.get(timeout=self.timeout)
                self.bytes.task_done()
            except Empty:
                self.finished.wait(self.timeout)
        self.worker.join()

    def download(self, filename):
        print(filename)
        self.bytes = Queue()
        self.finished = Event()
        self.worker = Thread(target=self.getBytes, args=(filename,))
        self.worker.start()
        return self.sendBytes()
        # imageStream = io.BytesIO(self.bytes)
        # imageFile = Image.open(imageStream)
        # with open('noaa-images/static/img/current-satallite.jpg','wb') as response:
        #     response.write(imageFile)
