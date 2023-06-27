import Collaborator from '../Collaborator'
import './Team.css'
const Team = (props) =>{
    const sectionCss = {backgroundColor: props.secondaryColor}
    const titleCss = {borderColor: props.primaryColor}
    return(
        <section className="team" style={sectionCss}>
            <h3 style={titleCss}>{props.nome}</h3>
            <Collaborator/>
        </section>
    )
}

export default Team