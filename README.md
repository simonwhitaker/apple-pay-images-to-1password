This repo contains a script that can be passed to `sips` (`man sips`) to add rounded corners to a rectangular image, and then pad it with transparent background into a square image.

I wrote it to convert the card images stored on my Mac by Apple Pay into images suitable for using as item images in 1Password.

To run the export, first install `jq` if you don't have it already (either `brew install jq` or follow the instructions [here](https://stedolan.github.io/jq/download/)), then:

```command
./export-all-card-images
```

Then check your desktop.
