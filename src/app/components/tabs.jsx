import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./tabs.css";

const TabsDemo = () => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger
        className="TabsTrigger"
        value="tab1"
        title="About Quick Think"
        tabIndex={0}
      >
        About Quick Think
      </Tabs.Trigger>
      <Tabs.Trigger
        className="TabsTrigger"
        value="tab2"
        title="Meet The Team"
        tabIndex={0}
      >
        Meet The Team
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
      <p className="Text">
        Your destination for fast-paced, brain-teasing fun! Whether you're a
        movie buff, video game enthusiast, trivia master, or science geek. Quick
        Think offers a diverse of challenging and engaging questions to test
        your knowledge and decision-making skills.
      </p>
      <h1> What is Quick Think? </h1>
      <p className="Text">
        Quick Think is an interactive web app designed to entertain and educate
        through multiple-choice quizzes. We cover a variety of categories to
        keep things fresh and exciting: Entertainment: Film - Explore trivia
        about iconic movies, actors, directors, and the magic behind the screen.
        Entertainment: Video Games - Test your gaming knowledge, from retro
        classics to modern blockbusters. General Knowledge - Show off your
        smarts with questions spanning history, culture, geography, and more.
        Science & Nature - Dive into the wonders of the natural world and the
        mysteries of the universe.
      </p>
      <p>
        {" "}
        Each Quiz is timed, encouraging quick thinking under pressure. Can you
        beat the clock and claim the top spot on our leader board?
      </p>
      <h1> Why Quick Think? </h1>
      <p>
        {" "}
        Our mission is to create a fun, fast, and engaging platform where users
        can expand their knowledge, challenge friends, and enjoy healthy
        competition. Where you're here to learn something new, sharpen your
        skills, or just pass the time with fun quizzes, Quick Think is here to
        keep you entertained.{" "}
      </p>
      <p> Ready to put your brainpower to the test? Join Quick Think Today! </p>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="tab2">
      <section class="team-section">
        <h1>Meet the Team</h1>
        <div class="team-container">
          <div class="team-member">
            {/* <img src="" alt="Zaynab Lunat"> */}
            <h3> Zaynab Lunat </h3>
            <p class="role">UX/UI Designer & Junior Developer </p>
            <p class="bio"></p>
          </div>

          <div class="team-member">
            {/* <img src="" alt="John Kennedy"> */}
            <h3> John Kennedy </h3>
            <p class="role">Full Stack Junior Web Developer </p>
            <p class="bio"></p>
          </div>

          <div class="team-member">
            {/* <img src="" alt="Noah Smart"> */}
            <h3> Noah Smart </h3>
            <p class="role">UX/UI Designer & Junior Developer </p>
            <p class="bio"></p>
          </div>

          <div class="team-member">
            {/* <img src="" alt="Samuel Weston"> */}
            <h3> Samuel Weston </h3>
            <p class="role">Junior Software Developer </p>
            <p class="bio"></p>
          </div>
        </div>
      </section>
    </Tabs.Content>
  </Tabs.Root>
);

export default TabsDemo;
