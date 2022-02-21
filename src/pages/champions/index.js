/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import axios from "axios";

const listChamp = [];
const modifyFileSuffix = (img) => img.replace(".png", "");

const ChampionPage = {
    // eslint-disable-next-line consistent-return
    async render() {
        const { data } = await axios.get("http://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion.json");
        for (const champ in data.data) {
            const {
                id, name, tags, image,
            } = data.data[champ];
            listChamp.push({
                id,
                name,
                tags,
                avatar: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${modifyFileSuffix(
                    image.full,
                )}_0.jpg`,
            });
        }
        console.log(listChamp);
        for (let i = 0; i < listChamp.length; i++) {
            console.log(i.name);
        }
    },
};

export default ChampionPage;