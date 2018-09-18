import { cloneableGenarator } from 'redux-saga/utils';
import { put } from 'redux-saga/effects';
import { fetchingBankData } from './sagas';


describe('Choose bank saga ', () => {

    it('Should fetch bank data', () => {
        const generator = cloneableGenarator(fetchingBankData)();
        const data ={
            bankName: "hsbc",
            logoImg: "../somepath/hsbc.png" 
        };
        const test = true;
        console.log(generator.next().value);
        //generator.next();
        expect(test.toBe(true));
    });

}); 