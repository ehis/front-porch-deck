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
            <Heading size={5} textColor={dialexaGold} style={{ margin: "1em 0"}}>
              Software Developer
            </Heading>
            <Link href="https://dialexa.com">
              <Image src={images.dialexa.replace("/", "")} margin="0.8em auto" height="50px" />
            </Link>
          </Slide>

          <Slide transition={["slide"]}>
            <Layout>
              <Heading size={5} fill textColor={whiteGrey}>Dialexa is a Technology Research, Design & Creation Firm</Heading>
            </Layout>
            <Layout>
              <List textColor={whiteGrey}>
                <ListItem fit style={{ fontSize: "1em"}}>Technology is disrupting industries</ListItem>
                <ListItem fit style={{ fontSize: "1em"}}>We turn concepts into products </ListItem>
                <ListItem fit style={{ fontSize: "1em"}}>And products into companies</ListItem>
              </List>
            </Layout>
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

          <Slide transition={["slide"]} bgColor="primary">
            <Layout>
              <Fill>
                <Heading fill caps textColor={brightBlue} size={4} margin="0.3em 0">Angular 2 & Typescript</Heading>
                <Heading size={4} caps textColor={whiteGrey} margin="1em 0">
                  Decorators & metadata
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Layout>
              <Fill>
                <CodePane
                  lang="js"
                  source={require("raw!../assets/decorator-metadata.ts")}
                  margin="20px auto"
                  style={{ fontSize: "0.8em" }}
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary" notes="Talk about Typescript">
            <CodePane
              lang="js"
              source={require("raw!../assets/typescript-sample.ts")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary" notes="Compiled Typescript Source in Javascript">
            <CodePane
              lang="js"
              source={require("raw!../assets/typescript-sample.js")}
              margin="20px auto"
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
            <List ordered size={5} textColor={whiteGrey}>
              <ListItem>
                Components - @Component()
              </ListItem>
              <ListItem>
                Dependency Injection - @Injectable()
              </ListItem>
              <ListItem>
                Observables - subscribe()
              </ListItem>
              <ListItem>
                Modules - @NgModule()
              </ListItem>
              <ListItem>
                Data - @Input()
              </ListItem>
              <ListItem>
                Events - @Output()
              </ListItem>
              <ListItem>
                Directives - @Directive()
              </ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <BlockQuote>
              <Quote textColor={brightBlue} style={{ fontStyle: "italic" }}>"In Angular 2 depedency injection is commonly used to pass services into components"</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={["slide"]}>
            <BlockQuote>
              <Quote textColor={brightBlue} style={{ fontStyle: "italic" }}>"Supports hierarchical dependency injection that works in parallel with the component tree"</Quote>
            </BlockQuote>
          </Slide>
          
          <Slide transition={["slide"]}>
            <BlockQuote>
              <Quote textColor={brightBlue} style={{ fontStyle: "italic" }}>"Simply put an observable emits a sequence of items in reactive programming"</Quote>
            </BlockQuote>
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

          <Slide transition={["slide"]} bgColor="primary" margin="0 0">
            <CodePane
              lang="js"
              source={require("raw!../assets/component-sample.ts")}
              style={{ fonSize: "0.2em" }}
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <CodePane
              lang="html"
              source={require("raw!../assets/template-sample.html")}
              margin="20px auto"
              style={{ fontSize: "0.8em" }}
            />
          </Slide>

          <Slide transition={["slilde"]}>
            <Heading>@Directive()</Heading>
          </Slide>

          <Slide transition={["slile"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/directive-sample.ts")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slile"]}>
            <CodePane
              lang="html"
              source={require("raw!../assets/directive-sample.html")}
              margin="20px auto"
              style={{ fontSize: "0.8em" }}
            />
          </Slide>

          <Slide>
            <Heading>@NgModule()</Heading>
          </Slide>

          <Slide>
            <CodePane
              lang="js"
              source={require("raw!../assets/module-sample.ts")}
              margin="20px auto"
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
            <Heading size={3} caps fit lineHeight={1.5} textColor={blueGreen}>
              DEMO
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
