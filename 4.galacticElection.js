function election(input) {
    let dataForElection = new Map();

    for(let line of input){
        let system = line["system"];
        let candidate = line["candidate"];
        let votes = Number(line["votes"]);

        if(!dataForElection.has(system)){
            dataForElection.set(system, new Map());
        }
        if(!dataForElection.get(system).has(candidate)){
            dataForElection.get(system).set(candidate, 0)
        }
        dataForElection.get(system).get(candidate) + votes
    }


    console.log(dataForElection)
}

election(
    [ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
    { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ]
)