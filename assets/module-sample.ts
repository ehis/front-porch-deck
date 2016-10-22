const components = [
  AppComponent,
  ProfileComponent,
  AvatarComponent
];

const directives = [
  ChartDirective
];

const pipes = {
  FromNowPipe
};

@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }