export default function page({ params }) {
    let languages = ["python ", "java-script ", "java", "c++"]
    if (languages.includes(params.slug)) {
        return <div>My Post : {params.slug}</div>
    }
    else {
        return <div>post not found </div>
    }

return <div>My Post:{params.slug}</div>
}