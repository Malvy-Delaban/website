# Set of very small tool used with this project

## Format text to array of string

This is a little script that take a string as parameter and that remove multiple space from the text separate each line to make a array of string

```shell
# You can use it as follow in a bash shell where the txt is in a file named "1.txt"
node format_text.js "$(cat 1.txt)"
# You can save the result into a file named "2.fomarted" like this
node format_text.js "$(cat 1.txt)" > 2.fomarted
```

## Create a file with all the dynamic url to prerender

```shell
node ./utils/dynamicRoutesToPrerender.js ./src/assets/games/game-list.json test ./routes.txt
```
