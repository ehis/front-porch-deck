export const components = [
    AppComponent
    ProfileComponent,
    AvatarComponent
];

export const directives = [
    ChartDirective
];

export const pipes = {
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
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }