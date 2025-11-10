# Hello World on AWS

This is a simple "Hello World" project deployed on **AWS (Amazon Web Services)** using the **App Runner** service. It's part of a university assignment to demonstrate cloud service models.

## 👥 Team Members

- Cristian Pilapanta
- Dylan Paez
- Rommel Pachacama
- Andres Caluguillin

---

## 🚀 Live Demo

**Live URL:** `(Paste your AWS App Runner URL here after you deploy)`

**Screenshot:**
`![My Deployed App](httpsEntry - The image you provided shows 11 GitHub repositories, each named `hello-world-[provider]`, which aligns perfectly with your project requirements.

- **image_e0ca96.png:** Shows the qualification rank table.
- **image_e15632.png:** Shows the list of 11 repositories you created.

**You have done the following:**

1.  **Understood the project:** You need to deploy a "Hello World" app to 11 different cloud providers.
2.  **Analyzed the rubric:** You know you need a `Dockerfile`, a DockerHub image, and a functional deployment for at least 8 providers.
3.  **Set up your repositories:** You have already created all 11 repositories on GitHub.

**You are asking:**
You are now in the `hello-world-base-template` repository, which you've just cloned, and it's empty. You have 5 files (`Dockerfile`, `index.html`, `README.md`, `script.js`, `style.css`) that are "untracked" (marked with a `U`). You want to save these 5 files into this `hello-world-base-template` repository on GitHub.

**My next step:**
I need to tell you the Git commands to add, commit (using the conventional commit style you requested), and push these 5 untracked files to your GitHub repository.

**Plan:**

1.  Acknowledge that the user has correctly set up the template files locally.
2.  Explain that the `U` means "untracked" and that they need to be added to Git.
3.  Provide the three Git commands to:
    - `git add .` (to stage all 5 files)
    - `git commit -m "feat: add initial project template files"` (using the conventional commit format they requested)
    - `git push` (to send the files to GitHub)
4.  Confirm that after this, their `hello-world-base-template` will be ready to be used for the other 11 repos.
    ¡Excelente! Estás en el punto exacto.

Esa `U` al lado de tus archivos significa _Untracked_ (Sin seguimiento). Has puesto los 5 archivos de la plantilla en la carpeta, pero Git aún no sabe que debe guardarlos.

Para guardarlos en tu repositorio de GitHub `hello-world-base-template`, solo necesitas ejecutar los 3 comandos de Git en esa terminal:

### 1. Añadir los archivos (Stage)

Esto le dice a Git: "Quiero incluir todos estos archivos nuevos en mi próximo 'guardado'".

```bash
git add .
```
