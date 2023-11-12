export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's your component name?",
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/components/{{pascalCase name}}/index.tsx',
        templateFile: 'generators/templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'app/components/{{pascalCase name}}/styles.ts',
        templateFile: 'generators/templates/styles.ts.hbs',
      },
    ],
  });
}
