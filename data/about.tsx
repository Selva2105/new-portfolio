import moment from 'moment'

interface IPersonalDetails {
    name: string;
    phone: string;
    email: string;
    address: string;
    availability: 'Open to opportunities' | 'In Working';
    experience: string;
    profile:string
}
// Calculate years of experience
const careerStartDate = moment('2023-11-01'); // Your career start date
const now = moment();
const years = now.diff(careerStartDate, 'years', true).toFixed(1);
const experienceText = `${years}+ ${years === "1.0 " ? 'year' : 'years'}`;

export const personalDetails: IPersonalDetails = {
    name: 'Selvaganapathi',
    phone: '+91 6369293685',
    email: 'selvaganapathikanakaraj2105@gmail.com',
    address: 'Coimbatore, IN',
    availability: 'Open to opportunities',
    experience: experienceText,
    profile:"https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/portfolio%2F593f3e46-7c0c-11ef-86cd-0242ac11000e.jpeg?alt=media&token=5d7b0683-cb01-4dfd-8812-f79d75971900"
} 