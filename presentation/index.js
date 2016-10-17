// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  Fit
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const darkBlue = "#13293D";
const blue = "#006494";
const blueGreen = "#247BA0";
const brightBlue = "#1B98E0";
const whiteGrey = "#E8F1F2";
const dialexaGold = "#D6B064";

const images = {
  universe: require("../assets/universe.jpg"),
  dialexa: require("../assets/dialexa.png"),
  angular: require("../assets/angular.png"),
  rx: require("../assets/rx.png"),
  typescript: require("../assets/typescript.png"),
  yaas: require("../assets/Yaas.gif")
};

preloader(images);

const theme = createTheme({
  primary: darkBlue,
  secondary: blue,
  tertiary: brightBlue,
  quartenary: whiteGrey
}, {
  primary: "Roboto Slab",
  secondary: "Roboto",
  tertiary: "Roboto"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor={whiteGrey} margin="0 0 1.2em 0">
              Hi, I am Ehis
            </Heading>
            <Heading size={5} textColor={dialexaGold}>
              Full Stack Developer
            </Heading>
            <Heading size={2} textColor={dialexaGold}>
              @
            </Heading>
            <Link href="https://dialexa.com">
              <Image src={images.dialexa.replace("/", "")} margin="0.8em auto" height="50px" />
            </Link>
          </Slide>


          <Slide transition={["slide"]} bgColor="primary" notes="Getting started with Angular 2 and Typescript">
            <Heading size={2} caps fit textColor={whiteGrey} textFont="primary">
              Angular 2
            </Heading>
            <Layout>
              <Fill>
                <Link href="https://angular.io/">
                  <Image src={images.angular.replace("/", "")} margin="0.8em auto" height="200px" />
                </Link>
                <Link href="http://reactivex.io/rxjs/">
                  <Image src={images.rx.replace("/", "")} margin="0.8em auto" height="200px" />
                </Link>
              </Fill>
            </Layout>
            <Link href="http://www.typescriptlang.org/">
              <Image src={images.typescript.replace("/", "")} margin="0.8em auto" height="" />
            </Link>
          </Slide>

          <Slide transition={["zoom"]} notes="Yaaaaas">
            <Image src={images.yaas.replace("/", "")} height="500px" />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Layout>
              <Fill>
                <Heading size={4} caps textColor={whiteGrey} margin={10}>
                  Typescript =
                </Heading>
              </Fill>
              <Fill>
                <Heading size={6} caps textColor={whiteGrey} margin={10}>
                  es6 Javascript + types
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary" notes="Talk about Typescript">
            <CodePane
              lang="js"
              source={require("raw!../assets/typescript-sample.ts")}
              margin="20px auto"
              style={{ fontSize: "0.8em" }}
            />
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary" notes="Compiled Typescript Source in Javascript">
            <CodePane
              lang="js"
              source={require("raw!../assets/typescript-sample.js")}
              margin="20px auto"
              style={{ fontSize: "0.8em" }}
            />
          </Slide>

          <Slide notes="Result for executing javascript file">
            <CodePane
              lang="sh"
              source={require("raw!../assets/sample-result.sh")}
              style={{ height: "50%", fontSize: "1.2em"}}
            />
          </Slide>

          <Slide notes="More typescript">
            <CodePane
              lang="js"
              source={require("raw!../assets/typescript-cool.ts")}
              style={{ height: "50%", fontSize: "1em"}}
            />
          </Slide>

          <Slide notes="The Easiest way to get started is to use the Angular Cli">
            <Text textColor={whiteGrey} margin="0 0 1em 0">Angular CLI an inspiration from Ember CLI</Text>
            <CodePane
              lang="sh"
              source={require("raw!../assets/angular-cli.sh")}
              style={{ height: "50%", fontSize: "1.2em"}}
            />
          </Slide>

          <Slide transition={["slide"]} bgImage={images.universe.replace("/", "")} bgDarken={0.45}>
            <Heading size={5} fit textColor={whiteGrey}>
              Dependency Injection - @Injectable()
            </Heading>
            <Heading size={5} fit textColor={whiteGrey}>
              Observables - subscribe()
            </Heading>
            <Heading size={5} fit textColor={whiteGrey}>
              Modules - @NgModule()
            </Heading>
            <Heading size={5} fit textColor={whiteGrey}>
              Components - @Component()
            </Heading>
            <Heading size={7} fit textColor={whiteGrey}>
              Data - @Input()
            </Heading>
            <Heading size={7} fit textColor={whiteGrey}>
              Events - @Output()
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading>
              @Component({})
            </Heading>
            <List textColor={whiteGrey}>
              <ListItem>HTML template</ListItem>
              <ListItem>stylesheet</ListItem>
              <ListItem>providers</ListItem>
              <ListItem>directives</ListItem>
              <ListItem>Lifecycle hooks</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Layout>
              <CodePane
                lang="js"
                source={require("raw!../assets/component-sample.ts")}
                margin="20px auto"
              />
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <CodePane
              lang="html"
              source={require("raw!../assets/template-sample.html")}
              margin="20px auto"
              style={{ fontSize: "0.8em" }}
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading>@angular/http </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <CodePane
              lang="js"
              source={require("raw!../assets/http-sample.ts")}
              margin="20px auto"
              style={{ fontSize: "0.8em" }}
            />
          </Slide>


          <Slide transition={["slide"]} bgColor="primary">
            <Heading>@angular/forms </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="Talk about the core concepts in angular 2 forms">
            <List textColor={whiteGrey}>
                <ListItem>Two Data Binding - [(ngModel)]</ListItem>
                <ListItem>Change Tracking</ListItem>
                <ListItem>Validation</ListItem>
                <ListItem>Error Handling</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="Talk about the core concepts in angular 2 forms">
            <CodePane
              lang="html"
              source={require("raw!../assets/form-sample.html")}
            />
          </Slide>

          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={1} caps fit lineHeight={1.5} textColor={blueGreen}>
              demo!
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
