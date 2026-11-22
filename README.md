# Ciao! – italian taskusanasto

Offline-PWA italian opiskeluun: suomi–italia + espanja vertailuna.

- **index.html** – PWA (asennettava, toimii offline service workerin avulla, kun sivu hostataan https:n yli)
- **ciao-italia.html** – sama yhtenä tiedostona; lataa puhelimeen ja avaa selaimella, toimii ilman nettiä
- **src/** – lähteet: `src.html` (UI), `data.js` (kuratoitu sanasto + opas), `dict1–4.js` (sanakirja + taivutusmuodot). Rakenna: `python3 src/build.py`

Välilehdet: Sanasto (+ omat variantit), Haku, Pilko (lauseen pilkonta sana kerrallaan), Kortit, Muistio (AI-kierto: vie selvitettävät Claudelle → tuo JSON-vastaus takaisin), Opas.

Sanaston formaatti: `data.js` rivit `suomi|italia|espanja`, `dict*.js` rivit `italia|suomi|espanja`.
