import fs from "fs";
import jetpack from "fs-jetpack";
import webp from "webp-converter";
import readline from "readline-sync";

const name = readline.question("Which folder to scan(short code)?");
const mainFolder = `../igp-exphub-portal-${name}/src/shared/components/ExperiencePortal`;

const includeFiles = [".js", ".jsx", ".css", ".scss"];
const convertAssets = ["*.png", "*.jpg", "*.jpeg"]
const extInFiles = ['.png','.jpg','.jpeg']

const convert = () => {
  jetpack.findAsync(mainFolder, { matching: convertAssets }).then((files) => {
    files.forEach((el) => {
      const index = el.lastIndexOf('.');
      let img = el.slice(0, index);
      const result = webp.cwebp(el, `${img}.webp`, "-q 90");
      result.then((res) => {
        fs.unlinkSync(el);
      });
      console.log("%Successfully converted: \n " + el,"color:green");
    });
    
  });
};

const walk = (folder) => {
  fs.readdir(folder, { withFileTypes: true }, (err, fold) => {
    if (err) throw err;

    fold.forEach((el) => {
      if (el.isDirectory()) {
        return walk(`${folder}/${el.name}`);
      } else if (includeFiles.some((v) => el.name.includes(v))) {
        fs.readFile(`${folder}/${el.name}`, "utf8", (err, data) => {
          if (err) return err;

          if (extInFiles.some((v) => data.includes(v))) {
            const replacedData = data.replace(/(png|jpg|jpeg)/g, "webp");
            console.log({ data, replacedData, path: `${folder}/${el.name}` });

            fs.writeFile(`${folder}/${el.name}`, replacedData, (err) => {
              if (err) console.log(err);
              else {
                console.log("Success");
              }
            });
          }
        });
      }
    });
  });
};
convert();
walk(mainFolder);
