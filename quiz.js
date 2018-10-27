"use strict";

var questions = [
  /* ESSENTIALISME ************************************************ */
  {
    question: "“One is not born, but rather becomes, a woman.”",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      },
      {
        axis: "femi",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question:
      "Differences of treatment and quality of life in our society show that racism is still omnipresent.",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question:
      "All sciences, even chemistry and biology are not uncompromising and are conditioned by our society.",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question:
      "The categories “women” and “men” are social constructs that should be given up.",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      },
      {
        axis: "femi",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question: "Nobody is by nature predisposed to criminality.",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question: "Sexual orientation is a social construct",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question:
      "Social differences between ethnic groups cannot be explained by biology.",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question:
      "The social roles of women and men can partly be explained by biological differences.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      },
      {
        axis: "femi",
        value: 3
      }
    ]
  },
  {
    question:
      "Hormonal differences can explain some differences in individual characteristics between women and men.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      },
      {
        axis: "femi",
        value: 3
      }
    ]
  },
  {
    question: "Sexual assaults are partly caused by men's natural impulse.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      },
      {
        axis: "femi",
        value: 3
      }
    ]
  },
  {
    question:
      "Transgender individuals will never really be of the gender they would like to be.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      }
    ]
  },
  {
    question:
      "Members of a nation or culture have some unchangeable characteristics that define them.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      }
    ]
  },
  {
    question: "Biologically, human beings are designed for heterosexuality.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      }
    ]
  },
  {
    question:
      "Selfishness is the overriding drive in the human species, no matter the context.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      }
    ]
  },
  /* NATIONALISME ************************************************* */
  {
    question: "Borders should eventually be abolished.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question:
      "People need to stand up for their ideals, even if it leads them to betray their country.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question:
      "My country must pay for the damages caused by the crimes it committed in other countries.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question:
      "If two countries have similar economies, social systems and environmental norms, then the free market between them has no negative impact.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question:
      "National Chauvinism during sports competitions is not acceptable.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question:
      "I am equally concerned about the inhabitants of my country and those of other the countries.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question:
      "Foreigners living in my country should be allowed to act politically, equally to those who have the nationality.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question: "Citizens should take priority over foreigners.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  {
    question:
      "The values of my country are superior to those of other countries.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  {
    question: "Multiculturalism is a threat to our society.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  {
    question: "A good citizen is a patriot.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  {
    question:
      "It is legitimate for a country to intervene militarily to defend its economic interests.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  {
    question:
      "It is necessary to teach history in order to create a sense of belonging to the nation.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  {
    question:
      "Research produced by my country should not be available to other countries.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  /* PRODUCTION *************************************************** */
  {
    question:
      "No one should get rich from owning a business, housing, or land.",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      }
    ]
  },
  {
    question: "Wage labor is a form of theft from the worker by companies.",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      }
    ]
  },
  {
    question: "It is important that health should stay a public matter.",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      }
    ]
  },
  {
    question: "Energy and transport structures should be a public matter.",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      }
    ]
  },
  {
    question: "Patents should not exist.",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      }
    ]
  },
  {
    question:
      "It is necessary to implement assemblies to ration our production to the consumers according to their needs.",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      }
    ]
  },
  {
    question: "The labor market enslaves workers.",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      }
    ]
  },
  {
    question: "Looking for one's own profit is healthy for the economy.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  {
    question:
      "It is merit that explains differences of wealth between two individuals.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  {
    question:
      "The fact that some schools and universities are private is not a problem.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  {
    question:
      "Offshoring and outsourcing are necessary evils to improve production.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  {
    question: "It is acceptable that there are rich and poor people.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  {
    question: "It is acceptable that some industry sectors are private.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  {
    question: "Banks should remain private.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  /* MARKET ******************************************************* */
  {
    question: "Revenues and capital should be taxed to redistribute wealth.",
    answer: 0,
    valuesYes: [
      {
        axis: "m0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m1",
        value: 3
      }
    ]
  },
  {
    question: "The age of retirement should be lowered.",
    answer: 0,
    valuesYes: [
      {
        axis: "m0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m1",
        value: 3
      }
    ]
  },
  {
    question:
      "Dismissals of employees should be forbidden except if it is justified.",
    answer: 0,
    valuesYes: [
      {
        axis: "m0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m1",
        value: 3
      }
    ]
  },
  {
    question:
      "Minimal levels of salary should be ensured to make sure that a worker can live of her/his work.",
    answer: 0,
    valuesYes: [
      {
        axis: "m0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m1",
        value: 3
      }
    ]
  },
  {
    question: "It is necessary to avoid private monopoly.",
    answer: 0,
    valuesYes: [
      {
        axis: "m0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m1",
        value: 3
      }
    ]
  },
  {
    question:
      "Loans contracted in the public sphere (State, regions, collectivities...) should not necessarily be refunded.",
    answer: 0,
    valuesYes: [
      {
        axis: "m0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m1",
        value: 3
      }
    ]
  },
  {
    question:
      "Some sectors or type of employment should be financially supported.",
    answer: 0,
    valuesYes: [
      {
        axis: "m0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m1",
        value: 3
      }
    ]
  },
  {
    question: "Market economy is optimal when it is not regulated.",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question:
      "Nowadays employees are free to choose when signing a contract with their future employer",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question:
      "It is necessary to remove regulations in labor legislation to encourage firms to hire.",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question:
      "The maximum allowed hours in the legal work week should be increased.",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question:
      "Environmental norms should be influenced by mass consumption and not from an authority.",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question: "Social assistance deters people from working.",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question:
      "State-run companies should be managed like private ones and follow the logic of the market (competition, profitability...).",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  /* SOCIETE ****************************************************** */
  {
    question: "Traditions should be questioned.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question:
      "I do not have any problem if other official languages are added or replace the already existing official language in my country.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "Marriage should be abolished.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      },
      {
        axis: "femi",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "Foreigners enrich our culture.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "The influence of religion should decrease.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "A language is defined by its users, not by scholars.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "Euthanasia should be authorized.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question:
      "Homosexuals should not be treated equally to heterosexuals with regards to marriage, parentage, adoption or procreation.",
    answer: 0,
    valuesYes: [
      {
        axis: "s1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s0",
        value: 3
      }
    ]
  },
  {
    question: "In some specific conditions, the death penalty is justified.",
    answer: 0,
    valuesYes: [
      {
        axis: "s1",
        value: 3
      },
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s0",
        value: 3
      },
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  {
    question: "Technological progress must not change society too quickly.",
    answer: 0,
    valuesYes: [
      {
        axis: "s1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s0",
        value: 3
      }
    ]
  },
  {
    question:
      "School should mostly teach our values, traditions and fundamental knowledge.",
    answer: 0,
    valuesYes: [
      {
        axis: "s1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s0",
        value: 3
      }
    ]
  },
  {
    question: "Abortion should be limited to specific cases.",
    answer: 0,
    valuesYes: [
      {
        axis: "s1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s0",
        value: 3
      },
      {
        axis: "femi",
        value: 3
      }
    ]
  },
  {
    question: "The main goal of a couple is to make at least one child.",
    answer: 0,
    valuesYes: [
      {
        axis: "s1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s0",
        value: 3
      }
    ]
  },
  {
    question:
      "Abstinence should be preferred to contraception, to preserve the true nature of the sexual act.",
    answer: 0,
    valuesYes: [
      {
        axis: "s1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s0",
        value: 3
      }
    ]
  },
  /* ECOLOGIE ***************************************************** */
  {
    question:
      "It is not acceptable that human actions should lead to the extinction of species.",
    answer: 0,
    valuesYes: [
      {
        axis: "e0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e1",
        value: 3
      }
    ]
  },
  {
    question: "GMOs should be forbidden outside research and medical purposes.",
    answer: 0,
    valuesYes: [
      {
        axis: "e0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e1",
        value: 3
      }
    ]
  },
  {
    question: "We must fight against global warming.",
    answer: 0,
    valuesYes: [
      {
        axis: "e0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e1",
        value: 3
      }
    ]
  },
  {
    question:
      "We should accept changes in our way of consuming food to limit the exploitation of nature.",
    answer: 0,
    valuesYes: [
      {
        axis: "e0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e1",
        value: 3
      }
    ]
  },
  {
    question:
      "It is important to encourage an agriculture that maintains a food biodiversity, even if the output is inferior.",
    answer: 0,
    valuesYes: [
      {
        axis: "e0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e1",
        value: 3
      }
    ]
  },
  {
    question:
      "Preserving non urban ecosystems is more important than creating jobs.",
    answer: 0,
    valuesYes: [
      {
        axis: "e0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e1",
        value: 3
      }
    ]
  },
  {
    question: "Reduction of waste should be done by reducing production.",
    answer: 0,
    valuesYes: [
      {
        axis: "e0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e1",
        value: 3
      }
    ]
  },
  {
    question:
      "Space colonization is a good solution for supplying the lack of raw material on Earth (iron, rare metals, fuel...) ",
    answer: 0,
    valuesYes: [
      {
        axis: "e1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e0",
        value: 3
      }
    ]
  },
  {
    question:
      "Transforming ecosystems durably to increase the quality of life of human beings is legitimate.",
    answer: 0,
    valuesYes: [
      {
        axis: "e1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e0",
        value: 3
      }
    ]
  },
  {
    question:
      "It is necessary to massively invest in research to improve productivity.",
    answer: 0,
    valuesYes: [
      {
        axis: "e1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e0",
        value: 3
      }
    ]
  },
  {
    question:
      "Transhumanism will be beneficial because it will allow us to improve our capacities.",
    answer: 0,
    valuesYes: [
      {
        axis: "e1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e0",
        value: 3
      }
    ]
  },
  {
    question:
      "Nuclear fission, when well maintained, is a good source of energy.",
    answer: 0,
    valuesYes: [
      {
        axis: "e1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e0",
        value: 3
      }
    ]
  },
  {
    question: "Exploitation of fossil fuels is necessary.",
    answer: 0,
    valuesYes: [
      {
        axis: "e1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e0",
        value: 3
      }
    ]
  },
  {
    question:
      "Maintaining strong economic growth should be an objective for the government.",
    answer: 0,
    valuesYes: [
      {
        axis: "e1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e0",
        value: 3
      }
    ]
  },
  /* LIBERTAIRE *************************************************** */
  {
    question: "Prisons should no longer exist.",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question:
      "It is unfair to set a minimal penalty for an offense or a crime.",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question:
      "Individuals who get out of prison should be accompanied in their reinsertion.",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question:
      "Justice should always take into consideration the context and the past of the condemned and adapt their penalty accordingly.",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question: "Conditions of life in jail should be greatly improved.",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question:
      "The filing and storage of personal records should be delimited strictly and database cross-checking should be forbidden.",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question: "The right to be anonymous on Internet should be guaranteed.",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question:
      "The purpose of the judiciary system should be to punish those who went against the law.",
    answer: 0,
    valuesYes: [
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  {
    question: "The police should be armed.",
    answer: 0,
    valuesYes: [
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  {
    question:
      "The sacrifice of some civil liberties is a necessity in order to be protected from terrorist acts.",
    answer: 0,
    valuesYes: [
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  {
    question: "Order and authority should be respected in all circumstances.",
    answer: 0,
    valuesYes: [
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  {
    question: "Heavy penalties are efficient because they are dissuasive.",
    answer: 0,
    valuesYes: [
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  {
    question:
      "It is better to arrest someone potentially dangerous preventively rather than taking the risk of having them committing a crime.",
    answer: 0,
    valuesYes: [
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  /* STRATEGIE **************************************************** */
  {
    question: "Mass strike is a good way to acquire new rights.",
    answer: 0,
    valuesYes: [
      {
        axis: "t0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t1",
        value: 3
      }
    ]
  },
  {
    question: "Armed struggle in a country is sometimes necessary.",
    answer: 0,
    valuesYes: [
      {
        axis: "t0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t1",
        value: 3
      }
    ]
  },
  {
    question: "Insurrection is necessary to deeply change society.",
    answer: 0,
    valuesYes: [
      {
        axis: "t0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t1",
        value: 3
      }
    ]
  },
  {
    question:
      "Activism in existing political organizations is not relevant to change society.",
    answer: 0,
    valuesYes: [
      {
        axis: "t0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t1",
        value: 3
      }
    ]
  },
  {
    question:
      "Elections organized by the state cannot question the powers in place.",
    answer: 0,
    valuesYes: [
      {
        axis: "t0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t1",
        value: 3
      }
    ]
  },
  {
    question: "Hacking has a legitimate place in political struggle.",
    answer: 0,
    valuesYes: [
      {
        axis: "t0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t1",
        value: 3
      }
    ]
  },
  {
    question: "Sabotage is legitimate under certain conditions.",
    answer: 0,
    valuesYes: [
      {
        axis: "t0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t1",
        value: 3
      }
    ]
  },
  {
    question: "Activists must always act in strict accordance with the law.",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  {
    question: "Revolutions will always end up in a bad way.",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  {
    question:
      "Changing the system radically is counter-productive. We should rather transform it progressively.",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  {
    question: "Violence against individuals is never productive.",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  {
    question:
      "We should always distance ourselves from protesters who use violence.",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  {
    question:
      "We need to make compromises with the opposition to apply our ideas.",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  {
    question:
      "Changes in an individual&#39;s way of life can induce changes in society.",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  /* BONUS ******************************************************** */
  {
    question: "My religion must be spread as widely as possible.",
    answer: 0,
    valuesYes: [
      {
        axis: "reli",
        value: 3
      }
    ],
    valuesNo: []
  },
  {
    question:
      "It is a small group that consciously and secretly controls the world.",
    answer: 0,
    valuesYes: [
      {
        axis: "comp",
        value: 3
      }
    ],
    valuesNo: []
  },
  {
    question: "A good policy is a pragmatic policy without ideology.",
    answer: 0,
    valuesYes: [
      {
        axis: "prag",
        value: 3
      }
    ],
    valuesNo: []
  },
  {
    question:
      "We need to establish a monarchy to federate the people and preserve our sovereignty.",
    answer: 0,
    valuesYes: [
      {
        axis: "mona",
        value: 3
      }
    ],
    valuesNo: []
  },
  {
    question: "Humans should neither eat nor exploit animals.",
    answer: 0,
    valuesYes: [
      {
        axis: "vega",
        value: 3
      }
    ],
    valuesNo: []
  },
  {
    question: "The State should be abolished.",
    answer: 0,
    valuesYes: [
      {
        axis: "anar",
        value: 3
      }
    ],
    valuesNo: []
  }
];

var qn = 0; // Question number
var prev_answer = null;

function shuffle(array) {
  var i = 0,
    j = 0,
    temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
shuffle(questions);

init_question();

function init_question() {
  document.getElementById("question-text").innerHTML = questions[qn].question;
  document.getElementById(
    "question-number"
  ).innerHTML = "Question %num% of %sum%"
    .replace("%num%", qn + 1)
    .replace("%sum%", questions.length);
  if (qn == 0) {
    document.getElementById("back_button").style.display = "none";
    document.getElementById("back_button_off").style.display = "block";
  } else {
    document.getElementById("back_button").style.display = "block";
    document.getElementById("back_button_off").style.display = "none";
  }
}

function next_question(mult) {
  questions[qn].answer = mult;
  qn++;

  if (qn < questions.length) {
    init_question();
  } else {
    results();
  }
}
function prev_question() {
  if (qn == 0) {
    return;
  }
  qn--;
  init_question();
}

function calc_score(score, max_value) {
  return ((100 * score) / max_value).toFixed(0);
}

function results() {
  var axes = {};

  for (var i = 0; i < questions.length; i++) {
    var q = questions[i];

    for (var j = 0; j < q.valuesYes.length; j++) {
      var a = q.valuesYes[j];
      if (!(a.axis in axes)) {
        axes[a.axis] = {
          val: 0,
          sum: 0
        };
      }

      if (q.answer > 0) {
        axes[a.axis].val += q.answer * a.value;
      }
      axes[a.axis].sum += Math.max(a.value, 0);
    }

    for (var j = 0; j < q.valuesNo.length; j++) {
      var a = q.valuesNo[j];
      if (!(a.axis in axes)) {
        axes[a.axis] = {
          val: 0,
          sum: 0
        };
      }

      if (q.answer < 0) {
        axes[a.axis].val -= q.answer * a.value;
      }
      axes[a.axis].sum += Math.max(a.value, 0);
    }
  }

  var url = "";
  for (var aK in axes) {
    if (axes[aK].val > 0) {
      if (url != "") url += "&";
      url += aK + "=" + calc_score(axes[aK].val, axes[aK].sum);
    }
  }
  url = window.btoa(url);
  url = "/results/?" + url;

  location.href = url;
}
