const igpData = [
    { "university": "NUS", "course": "Law", "grades": "AAA/A", "rp_70": 70 },
    { "university": "NUS", "course": "Medicine", "grades": "AAA/A", "rp_70": 70 },
    { "university": "NUS", "course": "Nursing", "grades": "CCD/C", "rp_70": 50 },
    { "university": "NUS", "course": "Dentistry", "grades": "AAA/A", "rp_70": 70 },
    { "university": "NUS", "course": "Architecture", "grades": "CCC/C", "rp_70": 52.5 },
    { "university": "NUS", "course": "Engineering", "grades": "BBB/C", "rp_70": 60 },
    { "university": "NUS", "course": "Industrial Design", "grades": "BBC/B", "rp_70": 58.75 },
    { "university": "NUS", "course": "Landscape Architecture", "grades": "CCC/B", "rp_70": 53.75 },
    { "university": "NUS", "course": "Computing (Business Analytics)", "grades": "AAA/A", "rp_70": 70 },
    { "university": "NUS", "course": "Computing (Information Systems)", "grades": "AAA/B", "rp_70": 68.75 },
    { "university": "NUS", "course": "Computing (Computer Science)", "grades": "AAA/A", "rp_70": 70 },
    { "university": "NUS", "course": "Computing (Information Security)", "grades": "AAA/B", "rp_70": 68.75 },
    { "university": "NUS", "course": "Computer Engineering", "grades": "AAA/A", "rp_70": 70 },
    { "university": "NUS", "course": "Data Science & Economics", "grades": "AAA/A", "rp_70": 70 },
    { "university": "NUS", "course": "Environmental Studies", "grades": "AAA/B", "rp_70": 68.75 },
    { "university": "NUS", "course": "Food Science & Technology", "grades": "AAA/C", "rp_70": 67.5 },
    { "university": "NUS", "course": "Humanities & Sciences", "grades": "ABB/C", "rp_70": 62.5 },
    { "university": "NUS", "course": "Pharmaceutical Science", "grades": "AAA/A", "rp_70": 70 },
    { "university": "NUS", "course": "Pharmacy", "grades": "AAA/C", "rp_70": 67.5 },
    { "university": "NUS", "course": "Philosophy, Politics & Economics", "grades": "AAA/A", "rp_70": 70 },
    { "university": "NUS", "course": "Business Administration", "grades": "AAA/C", "rp_70": 67.5 },
    { "university": "NTU", "course": "Medicine", "grades": "AAA/A", "rp_70": 70 },
    { "university": "NTU", "course": "Renaissance Engineering", "grades": "AAA/A", "rp_70": 70 },
    { "university": "NTU", "course": "Aerospace Engineering", "grades": "ABC/B", "rp_70": 61.25 },
    { "university": "NTU", "course": "Bioengineering", "grades": "BCC/B", "rp_70": 56.25 },
    { "university": "NTU", "course": "Chemical & Biomolecular Engineering", "grades": "BCC/C", "rp_70": 55 },
    { "university": "NTU", "course": "Civil Engineering", "grades": "CCD/D", "rp_70": 48.75 },
    { "university": "NTU", "course": "Electrical & Electronic Engineering", "grades": "CCC/D", "rp_70": 51.25 },
    { "university": "NTU", "course": "Environmental Engineering", "grades": "BCC/D", "rp_70": 53.75 },
    { "university": "NTU", "course": "Information Engineering & Media", "grades": "BCC/D", "rp_70": 53.75 },
    { "university": "NTU", "course": "Maritime Studies", "grades": "BCC/C", "rp_70": 55 },
    { "university": "NTU", "course": "Materials Engineering", "grades": "BCC/D", "rp_70": 53.75 },
    { "university": "NTU", "course": "Mechanical Engineering", "grades": "CCD/C", "rp_70": 50 },
    { "university": "NTU", "course": "Process Engineering and Synthetic Chemistry", "grades": "ABC/C", "rp_70": 60 },
    { "university": "NTU", "course": "Robotics", "grades": "BBC/B", "rp_70": 58.75 },
    { "university": "NTU", "course": "Artificial Intelligence and Society", "grades": "ABC/C", "rp_70": 60 },
    { "university": "NTU", "course": "Computer Engineering", "grades": "AAC/C", "rp_70": 62.5 },
    { "university": "NTU", "course": "Computer Science", "grades": "AAB/C", "rp_70": 65 },
    { "university": "NTU", "course": "Data Science & Artificial Intelligence", "grades": "AAB/B", "rp_70": 66.25 },
    { "university": "NTU", "course": "Science Double Major Programmes", "grades": "AAB/B", "rp_70": 66.25 },
    { "university": "NTU", "course": "Biological Sciences", "grades": "AAB/C", "rp_70": 65 },
    { "university": "NTU", "course": "Chemistry & Biological Chemistry", "grades": "BCC/C", "rp_70": 55 },
    { "university": "NTU", "course": "Chinese Medicine", "grades": "ABC/B", "rp_70": 61.25 },
    { "university": "NTU", "course": "Environmental Earth Systems Science", "grades": "AAB/B", "rp_70": 66.25 },
    { "university": "NTU", "course": "Mathematical Sciences", "grades": "BCC/B", "rp_70": 56.25 },
    { "university": "NTU", "course": "Physics / Applied Physics", "grades": "CCC/D", "rp_70": 51.25 },
    { "university": "NTU", "course": "Accountancy", "grades": "BBC/B", "rp_70": 58.75 },
    { "university": "NTU", "course": "Business", "grades": "BBC/B", "rp_70": 58.75 },
    { "university": "NTU", "course": "Applied Computing in Finance", "grades": "AAC/C", "rp_70": 62.5 },
    { "university": "NTU", "course": "SOH Double Major Programmes", "grades": "AAA/C", "rp_70": 67.5 },
    { "university": "NTU", "course": "SSS Double Major Programmes", "grades": "AAA/C", "rp_70": 67.5 },
    { "university": "NTU", "course": "Art, Design & Media", "grades": "CCC/C", "rp_70": 52.5 },
    { "university": "NTU", "course": "Chinese", "grades": "BBC/C", "rp_70": 57.5 },
    { "university": "NTU", "course": "Communication Studies", "grades": "ABC/B", "rp_70": 61.25 },
    { "university": "NTU", "course": "Economics", "grades": "ABC/B", "rp_70": 61.25 },
    { "university": "NTU", "course": "Economics and Data Science", "grades": "AAB/B", "rp_70": 66.25 },
    { "university": "NTU", "course": "English", "grades": "BBC/C", "rp_70": 57.5 },
    { "university": "NTU", "course": "History", "grades": "BCC/B", "rp_70": 56.25 },
    { "university": "NTU", "course": "Linguistics & Multilingual Studies", "grades": "BBC/C", "rp_70": 57.5 },
    { "university": "NTU", "course": "Philosophy", "grades": "BBC/C", "rp_70": 57.5 },
    { "university": "NTU", "course": "Philosophy, Politics, and Economics", "grades": "AAB/B", "rp_70": 66.25 },
    { "university": "NTU", "course": "Psychology", "grades": "AAC/B", "rp_70": 63.75 },
    { "university": "NTU", "course": "Public Policy & Global Affairs", "grades": "AAB/B", "rp_70": 66.25 },
    { "university": "NTU", "course": "Sociology", "grades": "BBC/C", "rp_70": 57.5 },
    { "university": "NTU", "course": "Arts (Academic Discipline & Education)", "grades": "BCC/B", "rp_70": 56.25 },
    { "university": "NTU", "course": "Science (Academic Discipline & Education)", "grades": "BBC/C", "rp_70": 57.5 },
    { "university": "NTU", "course": "Sport Science & Management", "grades": "BCC/D", "rp_70": 53.75 },
    { "university": "SMU", "course": "Accountancy", "grades": "BBB/C", "rp_70": 60 },
    { "university": "SMU", "course": "Business Management", "grades": "ABB/C", "rp_70": 62.5 },
    { "university": "SMU", "course": "Law", "grades": "AAA/A", "rp_70": 70 },
    { "university": "SMU", "course": "Economics", "grades": "BBB/C", "rp_70": 60 },
    { "university": "SMU", "course": "Information Systems", "grades": "BBC/C", "rp_70": 57.5 },
    { "university": "SMU", "course": "Computer Science", "grades": "AAB/B", "rp_70": 66.25 },
    { "university": "SMU", "course": "Computing & Law", "grades": "ABB/A", "rp_70": 65 },
    { "university": "SMU", "course": "Software Engineering", "grades": "BBC/B", "rp_70": 58.75 },
    { "university": "SMU", "course": "Social Sciences", "grades": "BBB/C", "rp_70": 60 },
    { "university": "SMU", "course": "Deferred Declaration of Degree /Integrative Studies", "grades": "ABB/A", "rp_70": 65 }
];

const h2Grades = { 'A': 20, 'B': 17.5, 'C': 15, 'D': 12.5, 'E': 10, 'S': 5, 'U': 0 };
const h1Grades = { 'A': 10, 'B': 8.75, 'C': 7.5, 'D': 6.25, 'E': 5, 'S': 2.5, 'U': 0 };

document.getElementById('s4-level').addEventListener('change', function() {
    const gradeSelect = document.getElementById('s4-grade');
    if (this.value === 'None') {
        gradeSelect.value = 'None';
        gradeSelect.disabled = true;
    } else {
        if (gradeSelect.value === 'None') gradeSelect.value = 'A';
        gradeSelect.disabled = false;
    }
});

document.getElementById('calculate-btn').addEventListener('click', () => {
    const gpGrade = document.getElementById('gp').value;
    const mtlGrade = document.getElementById('mtl').value;

    const subjects = [];
    for (let i = 1; i <= 4; i++) {
        const level = document.getElementById(`s${i}-level`).value;
        const grade = document.getElementById(`s${i}-grade`).value;
        if (level !== 'None' && grade !== 'None') {
            subjects.push({ level, grade });
        }
    }

    const h2Scores = subjects.filter(s => s.level === 'H2').map(s => h2Grades[s.grade]);
    const h1Scores = subjects.filter(s => s.level === 'H1').map(s => h1Grades[s.grade]);

    h2Scores.sort((a, b) => b - a);

    if (h2Scores.length > 3) {
        const weakestH2 = h2Scores.pop();
        h1Scores.push(weakestH2 / 2);
    }

    h1Scores.sort((a, b) => b - a);

    let baseScore = 0;
    for (let i = 0; i < Math.min(3, h2Scores.length); i++) {
        baseScore += h2Scores[i];
    }
    baseScore += h1Grades[gpGrade];

    let maxPercentage = baseScore / 70;

    const extraH1 = h1Scores.length > 0 ? h1Scores[0] : null;
    const mtlScore = mtlGrade !== 'None' ? h1Grades[mtlGrade] : null;

    if (extraH1 !== null) {
        const p = (baseScore + extraH1) / 80;
        if (p > maxPercentage) maxPercentage = p;
    }

    if (mtlScore !== null) {
        const p = (baseScore + mtlScore) / 80;
        if (p > maxPercentage) maxPercentage = p;
    }

    if (extraH1 !== null && mtlScore !== null) {
        const p = (baseScore + extraH1 + mtlScore) / 90;
        if (p > maxPercentage) maxPercentage = p;
    }

    const finalRP = maxPercentage * 70;
    
    document.getElementById('rp-result').textContent = finalRP.toFixed(2);
    
    const resultsSection = document.getElementById('results-section');
    resultsSection.style.display = 'block';
    
    // Force animation restart to provide visual feedback on recalculation
    resultsSection.style.animation = 'none';
    void resultsSection.offsetWidth; // trigger reflow
    resultsSection.style.animation = 'fadeIn 0.5s ease-in-out';
    
    renderCourses(finalRP);
    
    // Smooth scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

function renderCourses(rp) {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';

    const universities = ['NUS', 'NTU', 'SMU'];

    universities.forEach(uni => {
        const uniCourses = igpData.filter(c => c.university === uni && rp >= c.rp_70);
        
        if (uniCourses.length > 0) {
            const uniDiv = document.createElement('div');
            uniDiv.className = 'uni-section';
            
            const uniHeader = document.createElement('h3');
            uniHeader.textContent = uni;
            uniDiv.appendChild(uniHeader);

            const list = document.createElement('ul');
            uniCourses.forEach(c => {
                const item = document.createElement('li');
                
                const nameSpan = document.createElement('span');
                nameSpan.className = 'course-name';
                nameSpan.textContent = c.course;
                
                const igpSpan = document.createElement('span');
                igpSpan.className = 'course-igp';
                igpSpan.textContent = `${c.grades} (${c.rp_70} RP)`;
                
                item.appendChild(nameSpan);
                item.appendChild(igpSpan);
                list.appendChild(item);
            });
            
            uniDiv.appendChild(list);
            container.appendChild(uniDiv);
        }
    });

    if (container.innerHTML === '') {
        container.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 20px; grid-column: 1 / -1;">No programmes found matching your Rank Points.</p>';
    }
}