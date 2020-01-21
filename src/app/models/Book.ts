import { EnumerationComponent } from '../components/enumeration/enumeration.component';

export interface Book {
    BookId?: number;
    Title: string;
    Author: string;
    BookGenre: EnumerationComponent[];
    Owned: boolean;
    Reviewed: boolean;
}