import { db } from '../firebase-config'
import { collection, addDoc, getDocs, where, query, updateDoc, doc } from 'firebase/firestore'


class AddTags {

    constructor() {
        this.CourseTagsCollectionRef = collection(db, 'Tags');
    }
    // add a new tag
    set addNewTag(props) {
        const data = {
        tag_ID: props.Tag_ID,
        course_ID: props.Course_ID
        };

        const res = await this.CourseTagsCollectionRef.add(data);
        console.log(res);        
    }

    // get courses using a tag
    get queryForTags() {
        const tagsQuery = query(this.CourseTagsCollectionRef, where("Tag_ID", "==", props.Tag_ID));
        const tags = await getDocs(tagsQuery);
        const tag = tags.docs();

        return tag;
    }

}

export default AddTags;