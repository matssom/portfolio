<script>
import Container from "../components/Layout/Container.svelte";
import Section from "../components/Layout/Section.svelte";
import Flow from '../components/Layout/Flow.svelte'
import Stack from "../components/Layout/Stack.svelte";
import H1 from '../components/Type/H1.svelte';
import H3 from '../components/Type/H3.svelte';
import P from '../components/Type/P.svelte';
import Clickable from "../components/Feature/Clickable.svelte";
import Expand from "../components/Feature/Expand.svelte";

</script>

<Section>
    <Container padding horizontal center>
        <Stack size="section">
            <div>
                <H1 center icon="tools">Tools & Languages</H1>
                <P center>Here you can see all the tools & programming languages I am familiar with.</P>
            </div>
            <section class="tool-group">
                <div class="group-header">
                    <H3 center>Expert</H3>
                </div>
                <Flow center size="medium" fixed>
                    <Expand title="Javascript" image="assets/routes/tools/javascript.png" alt="javascript logo">
                        <P>Javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular and it has been my goto language ever since.</P>
                        <P>After countless hours studying the javascript spec sheet, creating npm tools and building NodeJS apps from the ground up, I think I can call my self proficient in javascript.</P>
                    </Expand>
                    <Expand title="Node.js" image="assets/routes/tools/nodejs.png" alt="node js logo">
                        <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium mollitia modi asperiores provident libero laboriosam fuga temporibus ex debitis reiciendis?</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="HTML" image="assets/routes/tools/html.png" alt="html logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="CSS" image="assets/routes/tools/css.png" alt="css 3 logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Sass" image="assets/routes/tools/sass.png" alt="css 3 logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                </Flow>
            </section>
            <section class="tool-group">
                <div class="group-header">
                    <H3 center>Proficient</H3>
                </div>
                <Flow center size="medium" fixed>
                    <Expand title="Svelte" image="assets/routes/tools/svelte.png" alt="svelte logo">
                        <Stack>
                            <P>Svelte is a lesser known frontend framework similar to vue or the react library. The key difference with svelte is that it's a compiler. In other words, it doesn't bundle the entire framework when shipping code. It looks at your code and compiles it down to plain html, css and js. This results in faster download speeds, less boilerplate and some really powerfull built-in features that are generally too large for other frameworks to include.</P>
                            <P>Svelte is my favourite frontend framework. Here is a link to a keynote by the creator: <Clickable notab to="https://www.youtube.com/watch?v=gJ2P6hGwcgo" text="Rethinking Reactivity - Rich Harris" /></P>
                        </Stack>
                    </Expand>
                    <Expand title="Typescript" image="assets/routes/tools/typescript.png" alt="typescript logo">
                        <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium mollitia modi asperiores provident libero laboriosam fuga temporibus ex debitis reiciendis?</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="React" image="assets/routes/tools/react.png" alt="react logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Redux" image="assets/routes/tools/redux.svg" alt="redux logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Mongo DB" image="assets/routes/tools/mongodb.png" alt="mongo db logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Python" image="assets/routes/tools/python.png" alt="python logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Java" image="assets/routes/tools/java.png" alt="java logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="SQL" image="assets/routes/tools/sql.png" alt="sql logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Git" image="assets/routes/tools/git.png" alt="git logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="GitHub" image="assets/routes/tools/github.png" alt="github logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Visual studio code" image="assets/routes/tools/vscode.png" alt="vscode logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Intellij IDEA" image="assets/routes/tools/intellij.svg" alt="intellij logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Heroku" image="assets/routes/tools/heroku.png" alt="heroku logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="NPM" image="assets/routes/tools/npm.png" alt="npm logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                </Flow>
            </section>
            <section class="tool-group">
                <div class="group-header">
                    <H3 center>Familiar</H3>
                </div>
                <Flow center size="medium" fixed>
                    <Expand title="Web components" image="assets/routes/tools/web-components.png" alt="javascript logo">
                        <P>Javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular and it has been my goto language ever since.</P>
                        <P>After countless hours studying the javascript spec sheet, creating npm tools and building NodeJS apps from the ground up, I think I can call my self proficient in javascript.</P>
                    </Expand>
                    <Expand title="Spring Boot" image="assets/routes/tools/spring.png" alt="spring logo">
                        <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium mollitia modi asperiores provident libero laboriosam fuga temporibus ex debitis reiciendis?</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Circle CI" image="assets/routes/tools/circleci.png" alt="circle ci logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Vercel" image="assets/routes/tools/vercel.png" alt="vercel logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Digital Ocean" image="assets/routes/tools/digital-ocean.png" alt="digital ocean logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Matlab" image="assets/routes/tools/matlab.png" alt="matlab logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="C#" image="assets/routes/tools/csharp.png" alt="c# logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Strapi" image="assets/routes/tools/strapi.svg" alt="strapi logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                </Flow>
            </section>
        </Stack>
    </Container>
</Section>

<style>

    .group-header {
        margin-bottom: 3.5rem;
    }

</style>