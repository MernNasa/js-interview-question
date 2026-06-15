import data from "../data/questions.json" with { type: "json" };

const root = document.getElementById("root");

Object.entries(data).forEach(([topic, questions]) => {

    const card = document.createElement("div");
    card.className = "topic-card";

    const title = document.createElement("h2");
    title.className = "topic-title";
    title.textContent = topic;

    const count = document.createElement("span");
    count.className = "question-count";
    count.textContent = `${questions.length} Questions`;

    const ul = document.createElement("ul");

    questions.forEach((question, index) => {
        const li = document.createElement("li");
        li.textContent =
            `${index + 1}. ${question.replaceAll("-", " ")} ?`;

        ul.appendChild(li);
    });

    card.append(title);
    card.append(count);
    card.append(ul);

    root.append(card);
});