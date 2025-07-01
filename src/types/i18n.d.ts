import 'vue-i18n'

// Define the structure of the translation objects
interface Challenge {
  title: string
  description: string
}

interface Module {
  title: string
  description: string
}

interface TeamMember {
  name: string
  expertise: string
}

// Define the structure of the messages
interface Messages {
  problem: {
    title: string
    description: string
    challenges: Challenge[]
  }
  solution: {
    title: string
    description: string
    modules: Module[]
  }
  team: {
    title: string
    description: string
    members: TeamMember[]
  }
  // Add other translation keys as needed
  [key: string]: any
}

// Extend the vue-i18n module
declare module 'vue-i18n' {
  interface DefineLocaleMessage extends Messages {}
}