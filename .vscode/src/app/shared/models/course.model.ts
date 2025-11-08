export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  instructor: string;
  price: number;
  rating: number;
  students: number;
  category: string;
  duration?: string;
  lessons?: number;
  level?: string;
  language?: string;
  descriptionLong?: string;
  requirements?: string[];
  whatYouWillLearn?: string[];
}
