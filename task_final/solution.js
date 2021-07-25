function sendRequest(name, phone, address, goods, sum) {
    let client = name + " " + phone;
    let addressForSend = "ул. " + address.street + ", дом " + address.house + ", " + address.entrance + " подъезд, " + address.floor + " этаж, кв " + address.flat;
    let order = { address: addressForSend, sum: sum };
    let goodsForSend = [];
    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i++) {
        let good = { title: goods[i].title, count: goods[i].count };
        goodsForSend.push(good);
    }

    let data = { client:client, order:order, goods:goodsForSend };
    let dataForSend = { data : data };
    let jsonData = JSON.stringify(dataForSend);

    return jsonData;
}