class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangerate.host/latest?base="
        this.amount = null;
        this.firstOutput = document.querySelector(".textValyuta");
        this.secondOutput = document.querySelector(".textOne");
    }

    exchange() {
        return new Promise((resolve, reject) => {
            fetch(`${this.url}${this.firstCurrency}&symbols=${this.secondCurrency}`)
                .then(response => {
                    if (response.status == 200) {
                       return response.json()}
                     })
                        .then(data => {
                            if(this.firstCurrency != this.secondCurrency){
                                const parity = data.rates[this.secondCurrency];
                                const amount2 = Number(this.amount);
                                let total = (parity * amount2).toFixed(4);
                                resolve(total);
                                this.firstOutput.textContent = `1  ${this.firstCurrency} =  ${parity.toFixed(4)} ${this.secondCurrency} `
                                this.secondOutput.textContent = `1 ${this.secondCurrency} = ${(1 / parity).toFixed(4)} ${this.firstCurrency} `
                            }
                            else{
                                alert("Eyni deyerleri cevirmek olmaz")
                              amountElement.value=""
                                input.value=""
                                this.firstOutput.textContent = "Eyni deyerleri cevirmek olmaz"
                                this.secondOutput.textContent = "Eyni deyerleri cevirmek olmaz"
                            }
                        
                        })
                        .catch(err => alert("sehv var"));
                    
                })

        

    }
    changeAmount(amount) {
        this.amount = amount;

    }
    changeFirstCurrency(newFisrtCurrency) {
        this.firstCurrency = newFisrtCurrency;
        return newFisrtCurrency;
    }
    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency;
        return newSecondCurrency;
    }

}
