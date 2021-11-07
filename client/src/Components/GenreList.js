import React from 'react';

const GenreList = prop => {
    let reviewObject = prop.reviews;
    let totalCount = 0;
    let genreCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    reviewObject.forEach(review => {
        switch (review.reviewGenre) {
            case "Alternative":
                genreCount[0] += 1;
                totalCount += 1;
                break;
            case "Blues":
                genreCount[1] += 1;
                totalCount += 1;
                break;
            case "Classical":
                genreCount[2] += 1;
                totalCount += 1;
                break;
            case "Country":
                genreCount[3] += 1;
                totalCount += 1;
                break;
            case "Dance":
                genreCount[4] += 1;
                totalCount += 1;
                break;
            case "Electronic":
                genreCount[5] += 1;
                totalCount += 1;
                break;
            case "Hip-Hop":
                genreCount[6] += 1;
                totalCount += 1;
                break;
            case "Rap":
                genreCount[7] += 1;
                totalCount += 1;
                break;
            case "Jazz":
                genreCount[8] += 1;
                totalCount += 1;
                break;
            case "Latin":
                genreCount[9] += 1;
                totalCount += 1;
                break;
            case "Pop":
                genreCount[10] += 1;
                totalCount += 1;
                break;
            case "R&B":
                genreCount[11] += 1;
                totalCount += 1;
                break;
            case "Soul":
                genreCount[12] += 1;
                totalCount += 1;
                break;
            case "Rock":
                genreCount[13] += 1;
                totalCount += 1;
                break;
            case "Metal":
                genreCount[14] += 1;
                totalCount += 1;
                break;
            default:
                break;
        }
    });

    return (
        <div className="card text-center border-dark">
            <div className="card-body">
                <h5 className="card-text">All : {totalCount} Posts</h5>
                <h5 className="card-text">Alternative : {genreCount[0]} Posts</h5>
                <h5 className="card-text">Blues : {genreCount[1]} Posts</h5>
                <h5 className="card-text">Classical : {genreCount[2]} Posts</h5>
                <h5 className="card-text">Country : {genreCount[3]} Posts</h5>
                <h5 className="card-text">Dance : {genreCount[4]} Posts</h5>
                <h5 className="card-text">Electronic : {genreCount[5]} Posts</h5>
                <h5 className="card-text">Hip-Hop : {genreCount[6]} Posts</h5>
                <h5 className="card-text">Rap : {genreCount[7]} Posts</h5>
                <h5 className="card-text">Jazz : {genreCount[8]} Posts</h5>
                <h5 className="card-text">Latin : {genreCount[9]} Posts</h5>
                <h5 className="card-text">Pop : {genreCount[10]} Posts</h5>
                <h5 className="card-text">R&B : {genreCount[11]} Posts</h5>
                <h5 className="card-text">Soul : {genreCount[12]} Posts</h5>
                <h5 className="card-text">Rock : {genreCount[13]} Posts</h5>
                <h5 className="card-text">Metal : {genreCount[14]} Posts</h5>
            </div>
        </div>
    )
}

export default GenreList;