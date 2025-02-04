import { dev } from "$app/environment";

export const title = "Mohammad Tanvir Hasan";

export const location: string = "USA"

export const schools: Record<string, string> = {
    UG: 'CSE at Khulna University of Engineerin & Technology',
    MS: 'CS at University of Arkansas',
}


export const description = "My Site";

export const credits = "joysofcode";

export const contactLinks: Record<string, string> = {
  GitHub: "https://github.com/tanvircr7",
  LinkedIn: "https://linkedin.com/in/mdthasan",
  Email: "mailto:mdtanvirhasan2583@gmail.com",
  Twitter: "https://twitter.com/MTH_2583",
};

export const url = dev ? 'http://localhost:5173/' : 'http://xyz:xyz/'