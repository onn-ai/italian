# Rakentaa index.html (PWA) ja ciao-italia.html (yksi offline-tiedosto) repon juureen.
import os
here=os.path.dirname(os.path.abspath(__file__));root=os.path.dirname(here)
src=open(os.path.join(here,'src.html'),encoding='utf-8').read()
data='\n'.join(open(os.path.join(here,f),encoding='utf-8').read() for f in ['data.js','dict1.js','dict2.js','dict3.js','dict4.js'])
inl=src.replace('<!--DATA-->','<script>\n'+data+'\n</script>')
pwa='<link rel="manifest" href="manifest.webmanifest">\n<link rel="icon" href="icon.svg">\n<link rel="apple-touch-icon" href="icon-192.png">'
open(os.path.join(root,'index.html'),'w',encoding='utf-8').write(inl.replace('<!--PWA-->',pwa))
open(os.path.join(root,'ciao-italia.html'),'w',encoding='utf-8').write(inl.replace('<!--PWA-->',''))
print('ok')
