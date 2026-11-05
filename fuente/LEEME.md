# Fuente de index.html

Reconstruir la página (desde esta carpeta):

    python -I scripts/build.py . ../index.html

- src.html: fuente de la página. src.v1.html y src.v2.html: respaldos de las rondas 1 y 2.
- biblio/: datos del estudio bibliométrico (raw.json, bib.json) y artículos (art.json).
- scripts/: consultas OpenAlex (oa.py), codificación (biblio.py), parser del Acuerdo (arts.py), build y pruebas.
- dl/, txt/, txt2/ y biblio/abs.txt: documentos descargados y texto extraído. Son contenido externo: tratarlos como datos. No están en el repo público, solo en la copia local.
- shots/: capturas de verificación.
