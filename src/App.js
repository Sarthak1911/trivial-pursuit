// import React, { useState } from "react";
// import "./App.css"
// // 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
// const subjects = ["Physics", "Chemistry", "Biology", "Geography", "History", "General Knowledge"];

// const sampleQuestions = {
//   "Physics": [
//     "What is the symbol for the speed of light?",
//     "Who is known for the theory of gravity?",
//     "What is the unit of force?",
//     "What is the SI unit for mass?",
//     "What kind of waves do we use to communicate via mobile phones?",
//     "What is the boiling point of water in Celsius?",
//     "What is the primary color of visible light with the shortest wavelength?",
//     "What does Ohm's Law state?",
//     "Which particle was discovered by J.J. Thomson?",
//     "What is the term for the bending of light as it passes from one medium to another?",
//     "What type of energy is stored in a compressed spring?",
//     "What is the law that describes the relationship between the force, mass, and acceleration of an object?",
//     "Which planet in the solar system has the most moons?",
//     "What is the unit of power in the SI system?",
//     "What is the phenomenon of time slowing down as an object approaches the speed of light known as?",
//     "What is the value of Planck's constant?",
//     "What is the principle of conservation of energy?",
//     "What is the Higgs boson also known as?",
//     "In quantum mechanics, what principle explains why no two particles can have the same quantum state simultaneously?",
//     "Who formulated the theory of electromagnetism, summarized in Maxwell’s equations?"
//   ],
//   "Chemistry": [
//     "What is the chemical symbol for water?",
//     "Which element is the most abundant in the Earth's crust?",
//     "What is the chemical formula for methane?",
//     "What is the atomic number of hydrogen?",
//     "Which gas do plants absorb from the atmosphere for photosynthesis?",
//     "What is the pH level of pure water?",
//     "Which acid is found in the stomach?",
//     "Who is credited with developing the periodic table of elements?",
//     "What is the chemical formula for sulfuric acid?",
//     "Which element has the chemical symbol Na?",
//     "What type of bond is formed when two atoms share electrons?",
//     "What is the name of the process where a solid changes directly into a gas?",
//     "Which gas is commonly used in balloons because it is lighter than air?",
//     "What is the most common element in the universe?",
//     "What is the name of the rule that describes how electrons fill orbitals in an atom?",
//     "What is the chemical formula for ammonia?",
//     "What is the oxidation state of sulfur in sulfuric acid (H2SO4)?",
//     "What type of chemical reaction is represented by the equation: 2H2 + O2 → 2H2O?",
//     "What is the process of turning a liquid into a solid called?",
//     "What is the term for a reaction in which a substance loses electrons?"
//   ],
//   "Biology": [
//     "What is the main function of red blood cells?",
//     "What organ is responsible for pumping blood throughout the body?",
//     "What is the basic unit of life?",
//     "Which part of the human body produces insulin?",
//     "Which vitamin is produced when the skin is exposed to sunlight?",
//     "What type of blood do arteries carry?",
//     "What is the name of the process by which plants make their own food?",
//     "Which type of blood cell is responsible for immune response?",
//     "What is the name of the pigment that gives plants their green color?",
//     "In which part of the cell does cellular respiration occur?",
//     "What is the term for the process of cell division that results in two identical daughter cells?",
//     "Which hormone regulates the sleep-wake cycle?",
//     "What is the largest organ in the human body?",
//     "What is the role of the ribosome in a cell?",
//     "What is the name of the genetic material found in mitochondria?",
//     "What is the process by which cells break down glucose to release energy in the absence of oxygen?",
//     "What is the term for the movement of water across a semi-permeable membrane?",
//     "What is the name of the structure that connects muscle to bone?",
//     "What is the function of the Golgi apparatus in a cell?",
//     "What is the term for a substance that induces a change in the genetic material of an organism?"
//   ],
//   "Geography": [
//     "What is the capital city of India?",
//     "Which country is known as the Land of the Rising Sun?",
//     "What is the largest continent by area?",
//     "What is the longest river in the world?",
//     "What is the tallest mountain in the world?",
//     "Which ocean is the largest?",
//     "What is the capital city of the USA?",
//     "What is the capital of Australia?",
//     "Which country has the most islands in the world?",
//     "Which river is the longest in India?",
//     "Which desert is the largest in the world?",
//     "Which country is home to the ancient city of Petra?",
//     "What is the capital of Canada?",
//     "Which European country has the most volcanoes?",
//     "Which island country is located between the Atlantic Ocean and the Mediterranean Sea?",
//     "The Amazon rainforest spans across how many countries?",
//     "Which country is home to the city of Timbuktu?",
//     "The Dead Sea is located between which two countries?",
//     "Which is the largest island in the world?",
//     "Which country is known as the 'Pearl of Africa'?"
//   ],
//   "History": [
//     "Who was the first President of India?",
//     "In which year did India gain independence from British rule?",
//     "Who was the first Prime Minister of India?",
//     "Who was the last Governor-General of independent India?",
//     "In which year did Mahatma Gandhi lead the Salt March?",
//     "What was the name of the first manned mission to the moon?",
//     "In which year did World War I begin?",
//     "Who was the Mughal emperor when the Taj Mahal was built?",
//     "Who was the first woman Prime Minister of India?",
//     "The Battle of Plassey was fought in which year?",
//     "Who was the first Emperor of China?",
//     "Who was the leader of the Nazi Party during World War II?",
//     "The Cold War primarily involved which two countries?",
//     "What was the name of the ship that brought the first English settlers to Jamestown in 1607?",
//     "Which Indian King is known for his conversion to Buddhism after the Kalinga War?",
//     "Who was the first person to circumnavigate the globe?",
//     "In which year did the Titanic sink?",
//     "What was the name of the first human-made satellite launched into space?",
//     "The Berlin Wall fell in which year?",
//     "Which empire was ruled by Genghis Khan?"
//   ],
//   "General Knowledge": [
//     "Who is the CEO of Tesla as of 2025?",
//     "Which company developed the first personal computer?",
//     "What does 'Wi-Fi' stand for?",
//     "Which programming language is widely used for web development alongside HTML and CSS?",
//     "What is the full form of 'URL'?",
//     "Who invented the telephone?",
//     "Which company is known for its iPhones?",
//     "In which year was the first iPhone released?",
//     "Which device is commonly used to measure temperature?",
//     "Which Indian tech company is known for its smartphone brand 'OnePlus'?",
//     "In which year did India launch its first satellite, Aryabhata?",
//     "What is the largest social media platform by active users?",
//     "Who is the co-founder of Microsoft along with Bill Gates?",
//     "Which country is the largest producer of coffee in the world?",
//     "What does the term 'Big Data' refer to?",
//     "What is the most used search engine on the internet?",
//     "Who developed the concept of 'Artificial Intelligence'?",
//     "Which country has the highest number of official languages?",
//     "What year was the World Wide Web (www) introduced?",
//     "Which company created the video game Fortnite?"
//   ]
// };


// const App = () => {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showAnswer, setShowAnswer] = useState(false);

//   const fetchQuestion = async (subject) => {
//     setLoading(true);
//     setShowAnswer(false);
//     try {
//       const examples = sampleQuestions[subject] || ["Generate a new question for this subject."];

//       const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer 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"
//         },
//         body: JSON.stringify({
//           model: "llama3-8b-8192",
//           messages: [
//             { role: "system", content: "You are an AI that generates quiz questions and their answers." },
//             { role: "user", content: `Here are some example questions for ${subject}: ${examples.join(" | ")}. Provide a new question that matches the difficulty level of these examples and also provide its correct answer in the format: 'Question: ... Answer: ...'` }
//           ],
//           max_tokens: 200
//         })
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       const fullResponse = data.choices?.[0]?.message?.content || "No question generated.";

//       const match = fullResponse.match(/Question:(.*)Answer:(.*)/s);
//       if (match) {
//         setQuestion(match[1].trim());
//         setAnswer(match[2].trim());
//       } else {
//         setQuestion("Failed to parse question. Try again.");
//         setAnswer("");
//       }
//     } catch (error) {
//       console.error("Error fetching question:", error);
//       setQuestion("Failed to fetch question. Try again.");
//       setAnswer("");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="container text-center mt-4 mb-4">
//       <h1>Trivial Pursuit</h1>
//       <h5>A Meme Team Exclusive Game!</h5>
//       <p>Select a subject to generate a question:</p>
//       <div className="container">
//         <div className="row row-cols-1 row-cols-md-3 g-3 justify-content-center">
//           {subjects.map((subject, index) => (
//             <div key={index} className="col d-flex justify-content-center">
//               <button
//                 className="btn btn-dark w-100 p-3 border"
//                 onClick={() => fetchQuestion(subject)}
//                 disabled={loading}
//               >
//                 {subject}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       {loading && <p>Loading...</p>}
//       {question && (
//         <div className="mt-4 p-3 border rounded">
//           <h5>Quiz Question:</h5>
//           <p>{question}</p>
//           <button className="btn btn-danger mt-2" onClick={() => setShowAnswer(true)}>I Lose</button>
//           {showAnswer && <p className="mt-2"><strong>Answer:</strong> {answer}</p>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

//-----------------------------16-03----------------------------------

import React, { useState } from "react";
import "./App.css";

const subjects = ["Physics", "Chemistry", "Biology", "Geography", "History", "General Knowledge", "Computer Science"];
const difficultyLevels = ["Easy", "Medium", "Hard"];

const App = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const fetchQuestion = async () => {
    if (!selectedSubject || !selectedDifficulty) {
      alert("Please select a subject and difficulty level.");
      return;
    }

    setLoading(true);
    setShowAnswer(false);
    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            { role: "system", content: "You are an AI that generates only theoretical quiz questions with very short answers (1-3 words max). Do not generate numerical or calculation-based questions. Keep answers concise and avoid explanations." },
            { role: "user", content: `Generate a new ${selectedDifficulty} difficulty question for ${selectedSubject}. Provide the question and the correct answer in the format: 'Question: ... Answer: ...'` }
          ],
          max_tokens: 200
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const fullResponse = data.choices?.[0]?.message?.content || "No question generated.";

      const match = fullResponse.match(/Question:(.*)Answer:(.*)/s);
      if (match) {
        setQuestion(match[1].trim());
        setAnswer(match[2].trim());
      } else {
        setQuestion("Failed to parse question. Try again.");
        setAnswer("");
      }
    } catch (error) {
      console.error("Error fetching question:", error);
      setQuestion("Failed to fetch question. Try again.");
      setAnswer("");
    }
    setLoading(false);
  };

  return (
    <div className="container text-center mt-4 mb-4">
      <h1>Trivial Pursuit</h1>
      <h5>A Meme Team Exclusive Game!</h5>
      <p>Select a subject and difficulty level to generate a question:</p>
      <div className="container mb-3" >
        <select className="form-select mb-2 text-bg-dark" onChange={(e) => setSelectedSubject(e.target.value)}>
          <option value="">Select Subject</option>
          {subjects.map((subject, index) => (
            <option key={index} value={subject} >{subject}</option>
          ))}
        </select>
        <select className="form-select mb-3 text-bg-dark" onChange={(e) => setSelectedDifficulty(e.target.value)}>
          <option value="">Select Difficulty</option>
          {difficultyLevels.map((level, index) => (
            <option key={index} value={level}>{level}</option>
          ))}
        </select>
        <button className="btn btn-dark w-100 p-3 border" onClick={fetchQuestion} disabled={loading}>
          Generate Question
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {question && (
        <div className="m-2">
          <div className="mt-4 p-3 border rounded">
            <h5>Quiz Question:</h5>
            <p>{question}</p>
            <button className="btn btn-danger mt-2" onClick={() => setShowAnswer(true)}>I Lose</button>
            {showAnswer && <p className="mt-2"><strong>Answer:</strong> {answer}</p>}
          </div>
        </div>

      )}
    </div>
  );
};

export default App;
