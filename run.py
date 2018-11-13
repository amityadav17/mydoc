import os
import sys
#import SimpleHTTPServer
#import SocketServer

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

PORT = int(os.environ.get("PORT", 5000)


#Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

#httpd = SocketServer.TCPServer(("", PORT), Handler)

command = "python -m http.server " + PORT,
print(command)
os.system(command)
print("serving at port", PORT)
httpd.serve_forever()
