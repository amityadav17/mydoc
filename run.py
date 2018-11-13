import os
import sys
#import SimpleHTTPServer
#import SocketServer

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

PORT = int(os.environ.get("PORT", 5000))


#Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

#httpd = SocketServer.TCPServer(("", PORT), Handler)

comm = "python -m http.server " + str(PORT)
print(comm)
os.system(comm)
print("serving at port", PORT)
#httpd.serve_forever()
