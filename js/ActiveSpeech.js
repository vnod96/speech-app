import Storage from './Storage.js';

class ActiveSpeech{
    constructor(){
        this.speech = {};
        this.speechTextBox = document.querySelector('textarea');
        this.author = document.querySelector('input[name=author]');
        this.tags = document.querySelector('input[name=tags]');
        this.lastUpdatedOn = document.querySelector('input[name=lastUpdatedOn]');
        this.speechTextBox.addEventListener('change', this._updateContent);
        this.author.addEventListener('change', this._updateAuthor);
        this.tags.addEventListener('change', this._updateTags);
        this.lastUpdatedOn.addEventListener('change', this._updateLastUpdatedOn);
    }
    setSpeech(speech){
        this.speech = speech;
        this._updateSpeechScreen();
    }
    save(){
        if(this.speech.id){
            update();
            return;
        }   
        else{
            const _prevId = Storage.getAll().map(map => map.id).reduce((a,b) => a>b?a:b, 0);
            this.speech.id = _prevId + 1;
        }
    }
    _updateSpeechScreen(){
        this.speechTextBox.value = this.speech.content;
        this.author.value = this.speech.author;
        this.tags.value = this.speech.tags;
        this.lastUpdatedOn.value = this.speech.lastUpdatedOn;
    }
    _updateContent(e){
        this.speech.content = e.target.value;
    }
    _updateAuthor(e){
        this.speech.author = e.target.value;
    }
    _updateTags(e){
        this.speech.tags = e.target.value;
    }
    _updateLastUpdatedOn(e){
        this.speech.lastUpdatedOn = e.target.value;
    }
}

const activeSpeech = new ActiveSpeech();

export default activeSpeech;