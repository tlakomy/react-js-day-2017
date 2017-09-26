// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, Code, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet, S,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  egnyteLogo: require("../assets/egnyte-logo.png"),
  virtualboy: require("../assets/virtualboy.jpg"),
  mario: require("../assets/mario.gif"),
  ducttape: require("../assets/ducttape.png"),
  smartphones: require("../assets/smartphones.png"),
  gearvr: require("../assets/gearvr.jpg"),
  phobias: require("../assets/phobias.jpg"),
  befearless: require("../assets/befearless.png"),
  dementia: require("../assets/dementia.png"),
  finalWishes: require("../assets/finalWishes.png"),
  mark: require("../assets/mark.jpg"),
  hellovr: require("../assets/hellovr.png"),
  axis: require("../assets/axis.png"),
  vr: require("../assets/vr.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "#019A95"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck contentWidth={1200} transition={["fade"]} theme={theme} transitionDuration={500}>
        <Slide bgColor="black">
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            Introduction to ReactVR
          </Heading>
          <Heading size={1} fit caps>
             Because 2D is not good enough
          </Heading>
          <Image fit src={images.egnyteLogo.replace("/", "")} height="200px"/>
        </Slide>  
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            We've been through this before
          </Heading>
        </Slide>
        <Slide bgImage={images.virtualboy.replace("/", "")}></Slide>
        <Slide bgImage={images.mario.replace("/", "")}></Slide>
        <Slide>
          <Heading size={2} caps fit>
            Available only in 🇯🇵 and 🇺🇸
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            Released in July 1995
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            Discontinued in December 1995
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Clearly, we weren't ready
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Are we ready now?
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            ¯\_(ツ)_/¯
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            Exciting times are ahead
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            Early adopters 👶
          </Heading>
        </Slide>
        <Slide bgImage={images.ducttape.replace("/", "")}></Slide>
        <Slide bgImage={images.smartphones.replace("/", "")}></Slide>
        <Slide bgImage={images.gearvr.replace("/", "")}></Slide>
        <Slide bgImage={images.mark.replace("/", "")} bgDarken={0.5}>
          <Heading size={2} caps fit textColor="white">
            How do we use this technology?
          </Heading>
        </Slide>
        <Slide>
          <BlockQuote>
            <Quote italic textColor="black">
              Virtual reality is just a platform - what matters is what goes through it
            </Quote>
            <Cite>dr Brennan Spiegel, Cedars-Sinai Medical Center</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            VR is not just games and ... videos 😳
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            There's so much more
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Overcoming phobias
          </Heading>
        </Slide>
        <Slide bgImage={images.phobias.replace("/", "")}></Slide>
        <Slide bgImage={images.befearless.replace("/", "")}></Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Not only for the young and healthy
          </Heading>
        </Slide>
        <Slide bgImage={images.dementia.replace("/", "")}></Slide>
        <Slide bgImage={images.finalWishes.replace("/", "")}></Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            All this - and more, on the web!
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            Why web?
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            VR native apps are huge
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            URLs > App Stores
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            What do we use on the web nowadays?
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Oh yeah, React
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            Hello ReactVR
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            A framework for building VR apps using React
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Architecture
          </Heading>
        </Slide>
        <Slide>
          <Appear fid="5">
            <Text fid="5" size={2} textColor="secondary" bgColor="white" margin={10}>
              ReactVR
            </Text>
          </Appear>
          <Appear fid="4">
            <Text fid="4" size={4} textColor="secondary" bgColor="white" margin={10}>
              React Runtime
            </Text>
          </Appear>
          <Appear fid="3">
            <Text fid="3" size={4} textColor="secondary" bgColor="white" margin={10}>
              OVRUI
            </Text>
          </Appear>
          <Appear fid="2">
            <Text fid="2" size={4} textColor="secondary" bgColor="white" margin={10}>
              Three.js
            </Text>
          </Appear>
          <Appear fid="1">
            <Text fid="1" size={4} textColor="secondary" bgColor="white" margin={10}>
              WebVR and Browser
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            Getting started
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Layout>
            <Code size={2} fit textColor="primary">
              npm install -g react-vr-cli
            </Code>
          </Layout>
          <Layout>
            <Code size={2} fit textColor="primary">
            react-vr init HelloVR 
          </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="primary"> 
            cd HelloVR
          </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="primary">
              npm start
            </Code>  
          </Layout>
        </Slide>
        <Slide bgImage={images.hellovr.replace("/", "")}></Slide>
        <Slide bgColor="black">
          <Layout>
            <Code size={2} fit textColor="primary" margin="0 0 0 20px">
              · node_modules
            </Code>
          </Layout>
          <Layout>
            <Code size={2} fit textColor="primary" margin="0 0 0 20px"> 
              · package.json
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="primary" margin="0 0 0 20px">
              · static_assets/
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="primary" margin="0 0 0 60px">
                · chess-world.jpg
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="primary" margin="0 0 0 20px"> 
              · vr/
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="primary" margin="0 0 0 60px">
                · client.js
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="primary" margin="0 0 0 60px">
                · index.html
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="primary" margin="0 0 0 20px">
              · index.vr.js
            </Code>  
          </Layout>
        </Slide>
        <Slide bgColor="black">
          <Layout>
            <Code size={2} fit textColor="gray" margin="0 0 0 20px">
              · node_modules
            </Code>
          </Layout>
          <Layout>
            <Code size={2} fit textColor="gray" margin="0 0 0 20px"> 
              · package.json
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="gray" margin="0 0 0 20px">
              · static_assets/
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="gray" margin="0 0 0 60px">
                · chess-world.jpg
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="gray" margin="0 0 0 20px"> 
              · vr/
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="gray" margin="0 0 0 60px">
                · client.js
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="gray" margin="0 0 0 60px">
                · index.html
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="primary" margin="0 0 0 20px">
              · index.vr.js
            </Code>  
          </Layout>
        </Slide>
        <Slide>
          <CodePane
            lang="javascript"
            textSize={16}
            source={require("raw-loader!../assets/hellovr.example")}
          />
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            Positioning items in 3D space
          </Heading>
        </Slide>
        <Slide bgImage={images.axis.replace("/", "")}></Slide>
        <Slide bgColor="black" textColor="primary">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Units and transforms
          </Heading>
          <List>
            <Appear><ListItem>Distance and dimensional units are in meters</ListItem></Appear>
            <Appear><ListItem>Rotation units are in degrees</ListItem></Appear>
            <Appear><ListItem>Transform properties:</ListItem></Appear>
            <Appear><List>
              <ListItem>Scale</ListItem>
              <Appear><ListItem>Rotate</ListItem></Appear>
              <Appear><ListItem>Translate</ListItem></Appear>
              <Appear><ListItem>Matrix</ListItem></Appear>
            </List></Appear>
          </List>
        </Slide>
        <Slide bgColor="black" textColor="primary">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Transforms are applied from right to left
          </Heading>
          <Layout>
            <Fill>
              <CodePane
                lang="javascript"
                textSize={20}
                source={require("raw-loader!../assets/transform01.example")}
              />
            </Fill>
            <Fill>
              <CodePane
                lang="javascript"
                textSize={20}
                source={require("raw-loader!../assets/transform02.example")}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Events
          </Heading>
        </Slide>
        <Slide bgColor="black" textColor="primary">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Supported Input Events
          </Heading>
          <List>
            <Appear><ListItem>onEnter</ListItem></Appear>
            <Appear><ListItem>onExit</ListItem></Appear>
            <Appear><ListItem>onMove</ListItem></Appear>
            <Appear><ListItem>onInput</ListItem></Appear>
            <Appear><List>
              <ListItem>MouseInputEvent</ListItem>
              <Appear><ListItem>KeyboardInputEvent</ListItem></Appear>
              <Appear><ListItem>TouchInputEvent</ListItem></Appear>
              <Appear><ListItem>GamepadInputEvent</ListItem></Appear>
            </List></Appear>
          </List>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Allright, that's cool but...
          </Heading>
        </Slide>      
        <Slide bgImage={images.vr.replace("/", "")} bgDarken={0.5}>
          <Heading size={2} caps fit textColor="white">
            Where's the VR?!
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            THE DEMO
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit textFont="primary">
            VR world is here
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Let's go and explore it together 😎
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Thank you! (Twitter: @tlakomy)
          </Heading>
        </Slide>
      </Deck>
    );
  }
}