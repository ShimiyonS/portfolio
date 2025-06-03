import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectProfile } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="MONEY MANAGER APP"
          des=" A financial tracking app built with React, Node.js, and MongoDB — track expenses, manage budgets, and visualize stats."
          src={projectProfile}
          link="https://money-manager-app-5ed7.vercel.app"
          githubLink="https://github.com/ShimiyonS/Money_manager_app"
        />
        <ProjectsCard
          title="Portfolios (Web and Mobile apps)"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          type="protfolio"
          profilelink="https://drive.google.com/drive/u/0/folders/1G-bAU7RqtlagrcJOhCprUldHpnQh4stU"
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        {/* <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        /> */}

        {/* <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
};

export default Projects;
