/* eslint-disable max-len */
interface IAboutUsText {
  title: string;
  TeamMembers: { [key: number]: string, subtitle: string, names: { [key: number]: string, 1: string, 2: string, 3: string }, links: { [key: number]: string, 1: string, 2: string, 3: string }, 1: string, 2: string, 3: string };
  Contributions: { [key: number]: string, subtitle: string, 1: string, 2: string, 3: string };
  Collaboration: { subtitle: string, subtitleDesc: string, initialTitle: string, initial: string, interimTitle: string, interim: string, finalTitle: string, final: string, dailyTitle: string, daily: string };
}

export const AboutUsText: IAboutUsText = {
  title: 'About us',
  TeamMembers: {
    subtitle: 'Team Members',
    names: {
      1: 'Anton Sokolovsky',
      2: 'Uladzislau Sopot',
      3: 'Alexandr',
    },
    links: {
      1: 'https://github.com/AntonSokolovsky',
      2: 'https://github.com/vladopot',
      3: 'https://github.com/AL5t',
    },
    1: ' is a talent in the north hemisphere of our Earth; as a child, he caught a polar bear and swam on it across the Arctic Ocean to Arkhangelsk, and from there, in a team of hundreds of squirrels, he reached St. Petersburg, where he began his journey from writing code on the frozen Neva to the Front-end course at RS School. ',
    2: ' is a hereditary lumberjack, he carved his first microcircuit from oak at the age of 5 and since then he became interested in IT; his desire to conquer the world and preach a comprehensive and all-healing code led him to the Front-end course at RS School. ',
    3: ' is a person eternally searching for himself, who at some point got so lost in three lines of code that he decided not to get out of it. Perhaps he ceased to be a material entity long time ago and became a projection, because only few people have seen him. ',
  },
  Contributions: {
    subtitle: 'Contribution:',
    1: '- planning meetings and creating agendas, - set up interaction with Commercetools and API client setup, - repository and task board setup, - development environment configuration, - integration with authentication service, - product filtering, sorting, and searching, - basket page implementation.',
    2: '- website design development, - development environment configuration, - login page implementation, - registration page implementation, - user profile page implementation, - catalog page enhancements.',
    3: '- website design enhancements, - development environment configuration, - routing implementation, - main page implementation, - catalog page implementation, - about us page implementation.',
  },
  Collaboration: {
    subtitle: 'Collaboration',
    subtitleDesc: 'Our team was built on effective interaction using different platforms (discord, telegram, github, jira, etc.).',
    initialTitle: 'Initial meeting',
    initial: 'The beginning of each sprint was accompanied by a discussion of: - work plan, - expected intermediate results and results of the entire sprint, - deadline for completing intermediate results, - distribution of responsibilities and assigning tasks to each team member, - the need to discuss specific tasks with mentors.',
    interimTitle: 'Interim and extraordinary meetings',
    interim: 'The schedule of interim meetings was set depending on the complexity of each sprint; usually interim meetings took place every 2-3 days. At interim meetings, interim results, the need to attract mentors, further planned work and results were discussed. Also, if necessary, at the initiative of one of the team members, extraordinary meetings were held to discuss certain issues or problems that required discussion by all team members and, if necessary, the involvement of mentors.',
    finalTitle: 'Final meetings',
    final: 'Following the results of the sprint, a meeting of team members was held to discuss: - final results, - identifying unresolved problems and creating a list of unfulfilled tasks, if any, as well as the deadline for their completion.',
    dailyTitle: 'Daily interaction',
    daily: 'Daily interaction between team members were  by using discord, telegram and commenting on pull requests on github.',
  },
};