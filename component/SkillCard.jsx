import React from 'react';

const SkillCard = () => {
    return (
        <div class="bg-base-100 shadow-xl p-7">
            <figure class="relative flex-shrink-0">
              <img
                src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons/icons/file_type_js.svg"
                alt="JavaScript Animation"
                class="rounded-xl animate-bounce"
                style="width: 44px; height: 44px"
              />
            </figure>
            <div class=" ">
              <h2 class="card-title my-5 font-bold">JavaScript</h2>
              <p class="text-gray-500">
                JavaScript, the programming language of the web, empowers
                developers to create dynamic and interactive web pages. From
                front-end interactivity to server-side scripting with Node.js,
                JavaScript is versatile and essential for modern web
                development.
              </p>
            </div>
          </div>
    );
};

export default SkillCard;