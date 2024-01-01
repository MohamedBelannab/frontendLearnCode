// server.mjs
import express from 'express';
import bodyParser from 'body-parser';
import { exec } from 'child_process';
import cors from 'cors';
import fs from 'fs';


const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.options('/execute', cors());

const executeCode = (language, code, res) => {
  switch (language.toLowerCase()) {
    case 'python':
      // Create a temporary Python file
      const originalPathPy = 'C:\\Users\\DELL\\Desktop\\react\\learnCode\\learnCode\\server\\python.py';
      const pythonFilePath = originalPathPy.replace(/\\/g, '\\\\');
      fs.writeFileSync(pythonFilePath, code);

      // Execute Python code from the file
      // console.log(pythonFilePath);
      const command = `py ${pythonFilePath}`;

      exec(command, (error, stdout, stderr) => {
        // Delete the temporary file
        fs.unlinkSync(pythonFilePath);

        if (error) {
          console.error(`Error executing code: ${error}`);
          res.status(500).send(`Error executing code: ${error}`);
          return;
        }

        const output = stdout || stderr;
        console.log(`Code executed successfully: ${output}`);
        res.send(output);
      });
      break;

    case 'javascript':
      // Execute JavaScript code directly
      const originalPathJs = 'C:\\Users\\DELL\\Desktop\\react\\learnCode\\learnCode\\server\\javascript.js';
      const jsFilePath = originalPathJs.replace(/\\/g, '\\\\');
      fs.writeFileSync(jsFilePath, code);
      const jsCommand = `node "${jsFilePath}"`;

      exec(jsCommand, (error, stdout, stderr) => {
        // Delete the temporary file
        fs.unlinkSync(jsFilePath);
        if (error) {
          console.error(`Error executing code: ${error}`);
          res.status(500).send(`Error executing code: ${error}`);
          return;
        }

        const output = stdout || stderr;
        console.log(`Code executed successfully: ${output}`);
        res.send(output);
      });
      break;

      case 'c':
        // Execute c code directly
        const originalPathc = 'C:\\Users\\DELL\\Desktop\\react\\learnCode\\learnCode\\server\\test.c';
        const pathExe = 'C:\\Users\\DELL\\Desktop\\react\\learnCode\\learnCode\\server\\test.exe'
        const CFilePath = originalPathc.replace(/\\/g, '\\\\');
        fs.writeFileSync(CFilePath, code);
        const CCommand = `gcc "${CFilePath}" -o ${pathExe} && ${pathExe} `;
        exec(CCommand, (error, stdout, stderr) => {
          // Delete the temporary file
          fs.unlinkSync(CFilePath);
          if (error) {
            console.error(`Error executing code: ${error}`);
            res.status(500).send(`Error executing code: ${error}`);
            return;
          }
  
          const output = stdout || stderr;
          console.log(`Code executed successfully: ${output}`);
          res.send(output);
        });
        break;  
      

        case 'php':
          // Execute php code directly
          const originalPathPhp = 'C:\\Users\\DELL\\Desktop\\react\\learnCode\\learnCode\\server\\test.php';
          const PhpFilePath = originalPathPhp.replace(/\\/g, '\\\\');
          fs.writeFileSync(PhpFilePath, code);
          const PhpCommand = `php "${PhpFilePath}"`;
          exec(PhpCommand, (error, stdout, stderr) => {
            // Delete the temporary file
            fs.unlinkSync(PhpFilePath);
            if (error) {
              console.error(`Error executing code: ${error}`);
              res.status(500).send(`Error executing code: ${error}`);
              return;
            }
    
            const output = stdout || stderr;
            console.log(`Code executed successfully: ${output}`);
            res.send(output);
          });
          break; 

    // Add cases for other languages as needed

    default:
      res.status(400).send('Unsupported language');
  }
};

app.post('/execute', (req, res) => {
  const { language, code } = req.body;
  console.log(`Received request for language ${language} with code: ${code}`);

  try {
    executeCode(language, code, res);
  } catch (error) {
    console.error('Error processing /execute:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
