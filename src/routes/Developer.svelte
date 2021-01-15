<script>
import Container from "../components/Layout/Container.svelte";
import Section from "../components/Layout/Section.svelte";
import Flow from '../components/Layout/Flow.svelte'
import Card from "../components/Layout/Card.svelte";
import Stack from "../components/Layout/Stack.svelte";
import H1 from '../components/Type/H1.svelte';
import H3 from '../components/Type/H3.svelte';
import P from '../components/Type/P.svelte';
import Split from "../components/Layout/Split.svelte";
import Clickable from "../components/Feature/Clickable.svelte";
import Expand from "../components/Feature/Expand.svelte";

</script>

<Section>
    <Container padding horizontal center>
        <Stack size="huge">
            <H1 center icon="code">Tools & Languages</H1>
            <section class="tool-group">
                <div class="group-header">
                    <H3 center>Expert</H3>
                </div>
                <Flow center size="medium" fixed>
                    <Expand title="Javascript" image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="javascript logo">
                        <P>Javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular and it has been my goto language ever since.</P>
                        <P>After countless hours studying the javascript spec sheet, creating npm tools and building NodeJS apps from the ground up, I think I can call my self proficient in javascript.</P>
                    </Expand>
                    <Expand title="Node.js" image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" alt="node js logo">
                        <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium mollitia modi asperiores provident libero laboriosam fuga temporibus ex debitis reiciendis?</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="HTML" image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="html logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="CSS" image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt="css 3 logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Sass" image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" alt="css 3 logo">
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
                    <Expand title="Svelte" image="https://raw.githubusercontent.com/github/explore/42198dc9113595ddd22cc12771bb719c8cf08b67/topics/svelte/svelte.png" alt="javascript logo">
                        <Stack>
                            <P>Svelte is a lesser known frontend framework similar to vue or the react library. The key difference with svelte is that it's a compiler. In other words, it doesn't bundle the entire framework when shipping code. It looks at your code and compiles it down to plain html, css and js. This results in faster download speeds, less boilerplate and some really powerfull built-in features that are generally too large for other frameworks to include.</P>
                            <P>Svelte is my favourite frontend framework. Here is a link to a keynote by the creator: <Clickable to="https://www.youtube.com/watch?v=gJ2P6hGwcgo" text="Rethinking Reactivity - Rich Harris" /></P>
                        </Stack>
                    </Expand>
                    <Expand title="Typescript" image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" alt="typescript logo">
                        <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium mollitia modi asperiores provident libero laboriosam fuga temporibus ex debitis reiciendis?</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="React" image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="react logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Mongo DB" image="https://img.icons8.com/color/452/mongodb.png" alt="mongo db logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Python" image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" alt="python logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Java" image="https://logoeps.com/wp-content/uploads/2011/06/java-logo-vector.png" alt="java logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="SQL" image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png" alt="sql logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Git" image="https://camo.githubusercontent.com/ce9c7a173f38722e129d5ae832a11c928ff72683fae74cbcb9fff41fd9957e63/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f332f33662f4769745f69636f6e2e7376672f3130323470782d4769745f69636f6e2e7376672e706e67" alt="git logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="GitHub" image="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Visual studio code" image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" alt="css 3 logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Intellij IDEA" image="https://upload.wikimedia.org/wikipedia/commons/d/d5/IntelliJ_IDEA_Logo.svg" alt="css 3 logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Heroku" image="https://pbs.twimg.com/profile_images/689189555765784576/3wgIDj3j.png" alt="heroku logo">
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
                    <Expand title="Web components" image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/web-components/web-components.png" alt="javascript logo">
                        <P>Javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular and it has been my goto language ever since.</P>
                        <P>After countless hours studying the javascript spec sheet, creating npm tools and building NodeJS apps from the ground up, I think I can call my self proficient in javascript.</P>
                    </Expand>
                    <Expand title="Spring Boot" image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/spring-boot/spring-boot.png" alt="spring logo">
                        <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium mollitia modi asperiores provident libero laboriosam fuga temporibus ex debitis reiciendis?</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Circle CI" image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Circleci-icon-logo.svg/1200px-Circleci-icon-logo.svg.png" alt="html logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Vercel" image="https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/180x180.png" alt="vercel logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Digital Ocean" image="https://seeklogo.com/images/D/digital-ocean-logo-7B970FE624-seeklogo.com.png" alt="digital ocean logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="Matlab" image="https://www.clipartmax.com/png/middle/182-1827816_png-file-matlab-black-logo-png.png" alt="matlab logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                    <Expand title="C#" image="https://logodix.com/logo/1803742.png" alt="c# logo">
                        <P>javascript is the first scripting language and really the first proper programming language I learned. I started using javascript back when jQuery still was popular. My javascript knowledge has expanded together with me learning Node, React, Svelte and many more javascript based tools.</P>
                        <P>I even use javascript as my main scripting language over shellscript.</P>
                    </Expand>
                </Flow>
            </section>
        </Stack>
    </Container>
</Section>

<style>

    .tool-group {
    }

    .group-header {
        margin-bottom: 3.5rem;
    }

</style>