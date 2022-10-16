class ArtGallery {

    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        articleModel = articleModel.toLowerCase();

        let isInTheArr = false;

        if (!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!");
        }

        for (const element of this.listOfArticles) {
            if (element.articleName === articleName && element.articleModel === articleModel) {
                element.quantity += Number(quantity); //
                isInTheArr = true;
            }
        }

        if (!isInTheArr) {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {

        for (let element of this.guests) {
            if (element.guestName === guestName) {
                throw new Error(`"${guestName} has already been invited."`);
            }
        }

        let newGuest = { guestName, points: 0, purchaseArticle: 0 };

        switch (personality) {
            case 'Vip':
                newGuest.points = 500; break;
            case 'Middle':
                newGuest.points = 250; break;
            default: //
                newGuest.points = 50; break; //
        }

        this.guests.push(newGuest);

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {

        let article;
        let guest;

        let isArticleInTheArray = false;

        for (let element of this.listOfArticles) {

            if (element.articleName !== articleName || element.articleModel !== articleModel) {
                isArticleInTheArray = false;
            }
            else {
                article = element;
                isArticleInTheArray = true;
                break;
            }
        }

        if (!isArticleInTheArray) {
            throw new Error(`This article is not found.`);
        }

        if (article.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        let isGuestInTheArray = false;

        for (let element of this.guests) {
            if (element.guestName !== guestName) {
                isGuestInTheArray = false;
            }
            else {
                isGuestInTheArray = true;
                guest = element;
                break;
            }
        }

        if (!isGuestInTheArray) {
            return `This guest is not invited.`;
        }


        if (guest.points < this.possibleArticles[articleModel]) { //
            return `You need to more points to purchase the article.`;
        }
        else {
            article.quantity--;
            guest.points -= this.possibleArticles[articleModel];
            guest.purchaseArticle++;
        }

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo(criteria) {

        if (criteria === 'article') {
            let returnValue = "Articles information:\n";
            for (let i = 0; i < this.listOfArticles.length; i++) {
                let el = this.listOfArticles[i];
                returnValue += `${el.articleModel} - ${el.articleName} - ${el.quantity}`;

                if (i == this.listOfArticles.length - 1) {
                    break;
                }
                returnValue += '\n';
            }

            return returnValue;
        }
        else if (criteria === 'guest') {
            let returnValue = "Guests information:\n";
            for (let i = 0; i < this.guests.length; i++) {
                let el = this.guests[i];
                returnValue += `${el.guestName} - ${el.purchaseArticle}`;

                if (i == this.guests.length - 1) {
                    break;
                }
                returnValue += '\n';
            }

            return returnValue;
        }

    }

}


///////////////////////////////////////////////////////

//Input1
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

//Input2
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
//console.log(artGallery.inviteGuest('John', 'Middle'));

//Input3
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

//Input4
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));
