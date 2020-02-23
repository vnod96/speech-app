import activeSpeech from './ActiveSpeech.js';
import Storage from './Storage.js';

// activeSpeech.setSpeech(speeches[1]);

const speeches = Storage.getAll();
class SpeechList {
    constructor(){
        this.speeches = speeches;
        this.selectedSpeech = {};
        this.update();
    } 
    update(){
        document.querySelector('#speech-list').innerHTML = this.speeches.map(SpeechItem).join('');
    }
    showSpeech(){
        activeSpeech.setSpeech(this.selectedSpeech);
    }

}

const speechList = new SpeechList();
// speechList.update();


function SpeechItem( speech ) {
    let { author, lastUpdatedOn, tags, content } = speech;
    return `
        <li>
            <div class="speech-item pure-g" onclick="update();">
                <div class="pure-u-3-4">
                    <h4>${content}</h4>
                    <p>
                        ${tags.map(Tag).join('')}
                    </p>
                </div>
                <div class="pure-u-1-4 attributes">
                    <h5>${lastUpdatedOn}</h5>
					<span><i>-</i>${author}</span>
                </div>
            </div>
        </li>
     `;
}


function Tag(tag) {
    return `
        <span class="tag">#${tag}</span>
    `;
}