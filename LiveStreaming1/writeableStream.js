var chalk = require("chalk");
var fs = require("fs");
var data = "gdssdvnwdvwdvj]iwdfmdnvsdljvsdlghsdghsfhghsfhjgs;fhhgshf;gh;sfghshf;ghsfhgfh;lghsf;lgh;lsfghlsfhgsfhlghsflghlfsghlfsghlsfhlghflhghfslgfhgdfghdfhgldfgdfhdlhgehgeohgehoighthfthfnwao;thr qujuergjep'jvmlgerw'hlmk'wvthe quick ;brown hfij'cxs' j'um[a[ POVN[WET'ITETELE LA'ZY GDOO'JGHJ";

var writeableStream = fs.createWriteStream("write.json");
writeableStream.write(data, "UTF-8");
writeableStream.end();
writeableStream.on("finish", function() {
    console.log(chalk.bgMagenta.white.bold("write completed"));
});
writeableStream.on("error", function(err) {
    console.log(chalk.bgYellow.red.bold(err.stack));
});
console.log(chalk.bgBlue("file ended...."));