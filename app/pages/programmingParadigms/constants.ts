import { LinkListItem } from '../../components';

export enum ProgrammingParadigmsLinkTitle {
  OOP = 'pp.link.title.oop',
  OOPBenefitsAndCriticism = 'pp.link.title.oop-benefits-and-criticism',
  OOPInDepth = 'pp.link.title.oop-in-depth',
  OOPPrinciples = 'pp.link.title.oop-principles',
  JSAbstraction = 'pp.link.title.js-abstraction',
  DI = 'pp.link.title.di',
  DIAndInversionOfControl = 'pp.link.title.di-and-inversion-of-control',
  InterfacesVsAbstractClasses = 'pp.link.title.interfaces-vs-abstract-classes',
  TSAbstractClass = 'typescript-abstract-class',
  FP = 'pp.link.title.fp',
  ComposingSoftware = 'pp.link.title.composing-software',
  FunctionComposition = 'pp.link.title.function-composition',
  HigherOrderFunctions = 'pp.link.title.higher-order-functions',
  FirstClassFunctions = 'pp.link.title.first-class-functions',
  RecursionProsCons = 'pp.link.title.recursion-pros-and-cons',
  Recursion = 'pp.link.title.recursion',
  Currying = 'pp.link.title.currying',
  Memorization = 'pp.link.title.memorization',
  FPVsOOP = 'pp.link.title.fp-vs-oop',
  FPBook = 'pp.link.title.fp-book',
  RP = 'pp.link.title.rp',
  RPInJS = 'pp.link.title.rp-in-js',
}

export const programmingParadigmsLinkUrl: Record<
  ProgrammingParadigmsLinkTitle,
  string
> = {
  [ProgrammingParadigmsLinkTitle.OOP]:
    'https://www.indeed.com/career-advice/career-development/what-is-object-oriented-programming',
  [ProgrammingParadigmsLinkTitle.OOPBenefitsAndCriticism]:
    'https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP',
  [ProgrammingParadigmsLinkTitle.OOPInDepth]:
    'https://www.educative.io/blog/object-oriented-programming',
  [ProgrammingParadigmsLinkTitle.OOPPrinciples]:
    'https://medium.com/@khmel87/javascript-four-principles-of-object-oriented-programming-cd81a04262cb',
  [ProgrammingParadigmsLinkTitle.JSAbstraction]:
    'https://www.javatpoint.com/javascript-oops-abstraction',
  [ProgrammingParadigmsLinkTitle.DI]:
    'https://www.freecodecamp.org/news/a-quick-intro-to-dependency-injection-what-it-is-and-when-to-use-it-7578c84fa88f/',
  [ProgrammingParadigmsLinkTitle.DIAndInversionOfControl]:
    'https://martinfowler.com/articles/injection.html',
  [ProgrammingParadigmsLinkTitle.InterfacesVsAbstractClasses]:
    'https://levelup.gitconnected.com/design-patterns-with-typescript-interfaces-vs-abstract-classes-b6aab6e2ad21',
  [ProgrammingParadigmsLinkTitle.TSAbstractClass]:
    'https://dotnetpattern.com/typescript-abstract-class',
  [ProgrammingParadigmsLinkTitle.FP]:
    'https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0',
  [ProgrammingParadigmsLinkTitle.ComposingSoftware]:
    'https://medium.com/javascript-scene/composing-software-the-book-f31c77fc3ddc',
  [ProgrammingParadigmsLinkTitle.FunctionComposition]:
    'https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0',
  [ProgrammingParadigmsLinkTitle.HigherOrderFunctions]:
    'https://eloquentjavascript.net/05_higher_order.html',
  [ProgrammingParadigmsLinkTitle.FirstClassFunctions]:
    'https://medium.com/launch-school/javascript-weekly-an-introduction-to-first-class-functions-9d069e6fb137',
  [ProgrammingParadigmsLinkTitle.RecursionProsCons]:
    'https://medium.com/@williambdale/recursion-the-pros-and-cons-76d32d75973a',
  [ProgrammingParadigmsLinkTitle.Recursion]:
    'https://stackoverflow.com/questions/5250733/what-are-the-advantages-and-disadvantages-of-recursion',
  [ProgrammingParadigmsLinkTitle.Currying]:
    'https://betterprogramming.pub/functional-programming-currying-vs-partial-application-53b8b05c73e3',
  [ProgrammingParadigmsLinkTitle.Memorization]:
    'https://www.section.io/engineering-education/an-introduction-to-memoization-in-javascript',
  [ProgrammingParadigmsLinkTitle.FPVsOOP]:
    'https://medium.com/@shaistha24/functional-programming-vs-object-oriented-programming-oop-which-is-better-82172e53a526',
  [ProgrammingParadigmsLinkTitle.FPBook]:
    'https://github.com/MostlyAdequate/mostly-adequate-guide',
  [ProgrammingParadigmsLinkTitle.RP]:
    'https://gist.github.com/staltz/868e7e9bc2a7b8c1f754',
  [ProgrammingParadigmsLinkTitle.RPInJS]:
    'https://dev.to/sagar/reactive-programming-in-javascript-with-rxjs-4jom',
};

export const programmingParadigmsLinks: LinkListItem[] = [
  {
    title: ProgrammingParadigmsLinkTitle.OOP,
    url: programmingParadigmsLinkUrl[ProgrammingParadigmsLinkTitle.OOP],
  },
  {
    title: ProgrammingParadigmsLinkTitle.OOPBenefitsAndCriticism,
    url: programmingParadigmsLinkUrl[
      ProgrammingParadigmsLinkTitle.OOPBenefitsAndCriticism
    ],
  },
  {
    title: ProgrammingParadigmsLinkTitle.OOPInDepth,
    url: programmingParadigmsLinkUrl[ProgrammingParadigmsLinkTitle.OOPInDepth],
  },
  {
    title: ProgrammingParadigmsLinkTitle.OOPPrinciples,
    url: programmingParadigmsLinkUrl[
      ProgrammingParadigmsLinkTitle.OOPPrinciples
    ],
  },
  {
    title: ProgrammingParadigmsLinkTitle.JSAbstraction,
    url: programmingParadigmsLinkUrl[
      ProgrammingParadigmsLinkTitle.JSAbstraction
    ],
  },
  {
    title: ProgrammingParadigmsLinkTitle.DI,
    url: programmingParadigmsLinkUrl[ProgrammingParadigmsLinkTitle.DI],
  },
  {
    title: ProgrammingParadigmsLinkTitle.DIAndInversionOfControl,
    url: programmingParadigmsLinkUrl[
      ProgrammingParadigmsLinkTitle.DIAndInversionOfControl
    ],
  },
  {
    title: ProgrammingParadigmsLinkTitle.InterfacesVsAbstractClasses,
    url: programmingParadigmsLinkUrl[
      ProgrammingParadigmsLinkTitle.InterfacesVsAbstractClasses
    ],
  },
  {
    title: ProgrammingParadigmsLinkTitle.TSAbstractClass,
    url: programmingParadigmsLinkUrl[
      ProgrammingParadigmsLinkTitle.TSAbstractClass
    ],
  },
  {
    title: ProgrammingParadigmsLinkTitle.FP,
    url: programmingParadigmsLinkUrl[ProgrammingParadigmsLinkTitle.FP],
  },
  {
    title: ProgrammingParadigmsLinkTitle.ComposingSoftware,
    url: programmingParadigmsLinkUrl[
      ProgrammingParadigmsLinkTitle.ComposingSoftware
    ],
  },
  {
    title: ProgrammingParadigmsLinkTitle.FunctionComposition,
    url: programmingParadigmsLinkUrl[
      ProgrammingParadigmsLinkTitle.FunctionComposition
    ],
  },
  {
    title: ProgrammingParadigmsLinkTitle.HigherOrderFunctions,
    url: programmingParadigmsLinkUrl[
      ProgrammingParadigmsLinkTitle.HigherOrderFunctions
    ],
  },
  {
    title: ProgrammingParadigmsLinkTitle.FirstClassFunctions,
    url: programmingParadigmsLinkUrl[
      ProgrammingParadigmsLinkTitle.FirstClassFunctions
    ],
  },
  {
    title: ProgrammingParadigmsLinkTitle.RecursionProsCons,
    url: programmingParadigmsLinkUrl[
      ProgrammingParadigmsLinkTitle.RecursionProsCons
    ],
  },
  {
    title: ProgrammingParadigmsLinkTitle.Recursion,
    url: programmingParadigmsLinkUrl[ProgrammingParadigmsLinkTitle.Recursion],
  },
  {
    title: ProgrammingParadigmsLinkTitle.Currying,
    url: programmingParadigmsLinkUrl[ProgrammingParadigmsLinkTitle.Currying],
  },
  {
    title: ProgrammingParadigmsLinkTitle.Memorization,
    url: programmingParadigmsLinkUrl[
      ProgrammingParadigmsLinkTitle.Memorization
    ],
  },
  {
    title: ProgrammingParadigmsLinkTitle.FPVsOOP,
    url: programmingParadigmsLinkUrl[ProgrammingParadigmsLinkTitle.FPVsOOP],
  },
  {
    title: ProgrammingParadigmsLinkTitle.FPBook,
    url: programmingParadigmsLinkUrl[ProgrammingParadigmsLinkTitle.FPBook],
  },
  {
    title: ProgrammingParadigmsLinkTitle.RP,
    url: programmingParadigmsLinkUrl[ProgrammingParadigmsLinkTitle.RP],
  },
  {
    title: ProgrammingParadigmsLinkTitle.RPInJS,
    url: programmingParadigmsLinkUrl[ProgrammingParadigmsLinkTitle.RPInJS],
  },
];
