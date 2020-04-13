import { Injectable } from '@angular/core';
import { iService } from './models/services/service.model';
import { iSubservice } from './models/services/subservice.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  allServices: iService[] = [

    {
      name: "Regular expression",
      description: "My regular expression",
      path: "/regular-expression",
      subservices: [
        {
          name: "Group mover",
          description: "My group mover description",
          path: "/group-mover",
          examples: [
            {
              name: "Questions transform",
              description: "Transform your question and answers to another pattern",
              value: `Question 1 - What is your name?\n\t!a) Rostik\n\tb)Roman\n\tc)Ruslan\nQuestion 2 - What are you years old?\n\ta)18n\n\t!b)19\n\tc)20 `,
              regularExpression: `Question\\s+(\\d+)\\s-\\s(.*[:?])\\s*.*\\s.*\\s*.*!\\w\\)(.*)`,
              type: "each",
              resultEach: `function (match) {\n\tconsole.log(match);\n\tconst number = match[1];\n\tconst question = match[2];\n\tconst answer = match[3];\n\treturn \`\${number}) \${question} - \${answer}\\n\`;\n}`,
              resultGlobal: `function (matches) {\n\tlet result = "";\n\tfor(let i = 0; i < matches.length; i++) {\n\t\tconst match = matches[i];\n\t\tconsole.log(match);\n\t\tconst number = match[1];\n\t\tconst question = match[2];\n\t\tconst answer = match[3];\n\t\tresult += \`\${number}) \${question} - \${answer}\\n\`;\n\t}\n\treturn result;\n}`,
              resultArguments: `------------------\nQuestion - %3\nAnswer - %4\n`
            },
            {
              name: "My name",
              description: "My description",
              value: `Question 1 - What is your name?\n\t!a) Rostik\n\tb)Roman\n\tc)Ruslan\nQuestion 2 - What are you years old?\n\ta)18n\n\t!b)19\n\tc)20 `,
              regularExpression: `Question\\s+(\\d+)\\s-\\s(.*[:?])\\s*.*\\s.*\\s*.*!\\w\\)(.*)`,
              type: "each",
              resultEach: `function (match) {\n\tconsole.log(match);\n\tconst number = match[1];\n\tconst question = match[2];\n\tconst answer = match[3];\n\treturn \`\${number}) \${question} - \${answer}\\n\`;\n}`,
              resultGlobal: `function (matches) {\n\tlet result = "";\n\tfor(let i = 0; i < matches.length; i++) {\n\t\tconst match = matches[i];\n\t\tconsole.log(match);\n\t\tconst number = match[1];\n\t\tconst question = match[2];\n\t\tconst answer = match[3];\n\t\tresult += \`\${number}) \${question} - \${answer}\\n\`;\n\t}\n\treturn result;\n}`,
              resultArguments: `------------------\nQuestion - %3\nAnswer - %4\n`
            }
          ]
        }
      ]
    },
    {
      name: "Texts",
      description: "My texts description",
      path: "/texts",
      subservices: [
        {
          name: "JS Text",
          description: "My js text description",
          path: "/js-text",
          examples: []
        }
      ]
    },
    {
      name: "Codes",
      description: "My codes description",
      path: "/codes",
      subservices: [
        {
          name: "Minimizer",
          description: "My minimizer description",
          path: "/minimizer",
          examples: []
        }
      ]
    }
  ]

  constructor() { }
}
