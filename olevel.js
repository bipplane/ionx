document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const resultsSection = document.getElementById('results-section');
    
    // Result elements
    const l1r5Net = document.getElementById('l1r5-net');
    const l1r5Raw = document.getElementById('l1r5-raw');
    const l1r4Net = document.getElementById('l1r4-net');
    const l1r4Raw = document.getElementById('l1r4-raw');
    const elr2b2Net = document.getElementById('elr2b2-net');
    const elr2b2Raw = document.getElementById('elr2b2-raw');
    const breakdownDiv = document.getElementById('calculation-breakdown');

    calculateBtn.addEventListener('click', () => {
        // 1. Gather all grades
        const english = parseInt(document.getElementById('english-grade').value);
        const hmt = parseInt(document.getElementById('hmt-grade').value);
        const mt = parseInt(document.getElementById('mt-grade').value);
        const math = parseInt(document.getElementById('math-grade').value);
        const science = parseInt(document.getElementById('science-grade').value);
        const humanities = parseInt(document.getElementById('humanities-grade').value);
        
        const other1 = parseInt(document.getElementById('other1-grade').value);
        const other2 = parseInt(document.getElementById('other2-grade').value);
        const other3 = parseInt(document.getElementById('other3-grade').value);

        // 2. Gather Bonus Points
        const ccaBonus = parseInt(document.getElementById('cca-bonus').value);
        const hmtBonus = document.getElementById('hmt-bonus').checked ? 2 : 0;
        const affiliationBonus = document.getElementById('affiliation-bonus').checked ? 2 : 0;
        
        // Max bonus points is usually capped at 4
        let totalBonus = Math.min(4, ccaBonus + hmtBonus + affiliationBonus);

        // 3. Determine L1 (Best of English or Higher Mother Tongue)
        let l1 = 0;
        let l1Name = "";
        
        if (english > 0 && hmt > 0) {
            if (english <= hmt) {
                l1 = english;
                l1Name = "English";
            } else {
                l1 = hmt;
                l1Name = "Higher Mother Tongue";
            }
        } else if (english > 0) {
            l1 = english;
            l1Name = "English";
        } else if (hmt > 0) {
            l1 = hmt;
            l1Name = "Higher Mother Tongue";
        } else {
            alert("Please enter a grade for English or Higher Mother Tongue (L1).");
            return;
        }

        // 4. Gather all other subjects into a pool
        let pool = [];
        
        // If HMT wasn't used as L1, it can be used as a relevant subject
        if (hmt > 0 && l1Name !== "Higher Mother Tongue") pool.push({name: "Higher Mother Tongue", grade: hmt, type: "R"});
        if (english > 0 && l1Name !== "English") pool.push({name: "English", grade: english, type: "R"});
        
        if (mt > 0) pool.push({name: "Mother Tongue", grade: mt, type: "R"});
        if (math > 0) pool.push({name: "Mathematics", grade: math, type: "Math"});
        if (science > 0) pool.push({name: "Science", grade: science, type: "Science"});
        if (humanities > 0) pool.push({name: "Humanities", grade: humanities, type: "Humanities"});
        
        if (other1 > 0) pool.push({name: "Other Subject 1", grade: other1, type: "Any"});
        if (other2 > 0) pool.push({name: "Other Subject 2", grade: other2, type: "Any"});
        if (other3 > 0) pool.push({name: "Other Subject 3", grade: other3, type: "Any"});

        // Sort pool by grade (lowest is best)
        pool.sort((a, b) => a.grade - b.grade);

        // --- Calculate L1R5 (JC) ---
        // Needs: L1 + 1 Math/Science + 1 Humanities + 1 Humanities/Math/Science + 2 Any
        let r5Raw = 0;
        let r5Subjects = [];
        let r5Pool = [...pool];
        
        // Find 1 Math or Science
        let msIndex = r5Pool.findIndex(s => s.type === "Math" || s.type === "Science");
        if (msIndex !== -1) {
            r5Subjects.push(r5Pool[msIndex]);
            r5Pool.splice(msIndex, 1);
        }

        // Find 1 Humanities
        let humIndex = r5Pool.findIndex(s => s.type === "Humanities");
        if (humIndex !== -1) {
            r5Subjects.push(r5Pool[humIndex]);
            r5Pool.splice(humIndex, 1);
        }

        // Find 1 Humanities/Math/Science
        let hmsIndex = r5Pool.findIndex(s => s.type === "Humanities" || s.type === "Math" || s.type === "Science");
        if (hmsIndex !== -1) {
            r5Subjects.push(r5Pool[hmsIndex]);
            r5Pool.splice(hmsIndex, 1);
        }

        // Find 2 Any
        for (let i = 0; i < 2; i++) {
            if (r5Pool.length > 0) {
                r5Subjects.push(r5Pool[0]);
                r5Pool.splice(0, 1);
            }
        }

        if (r5Subjects.length === 5) {
            r5Raw = l1 + r5Subjects.reduce((sum, s) => sum + s.grade, 0);
            l1r5Raw.textContent = r5Raw;
            l1r5Net.textContent = Math.max(0, r5Raw - totalBonus);
        } else {
            l1r5Raw.textContent = "N/A";
            l1r5Net.textContent = "N/A";
        }

        // --- Calculate L1R4 (MI) ---
        // Needs: L1 + 1 Math/Science + 1 Humanities + 2 Any
        let r4Raw = 0;
        let r4Subjects = [];
        let r4Pool = [...pool];

        // Find 1 Math or Science
        let r4msIndex = r4Pool.findIndex(s => s.type === "Math" || s.type === "Science");
        if (r4msIndex !== -1) {
            r4Subjects.push(r4Pool[r4msIndex]);
            r4Pool.splice(r4msIndex, 1);
        }

        // Find 1 Humanities
        let r4humIndex = r4Pool.findIndex(s => s.type === "Humanities");
        if (r4humIndex !== -1) {
            r4Subjects.push(r4Pool[r4humIndex]);
            r4Pool.splice(r4humIndex, 1);
        }

        // Find 2 Any
        for (let i = 0; i < 2; i++) {
            if (r4Pool.length > 0) {
                r4Subjects.push(r4Pool[0]);
                r4Pool.splice(0, 1);
            }
        }

        if (r4Subjects.length === 4) {
            r4Raw = l1 + r4Subjects.reduce((sum, s) => sum + s.grade, 0);
            l1r4Raw.textContent = r4Raw;
            l1r4Net.textContent = Math.max(0, r4Raw - totalBonus);
        } else {
            l1r4Raw.textContent = "N/A";
            l1r4Net.textContent = "N/A";
        }

        // --- Calculate ELR2B2 (Poly) ---
        // Needs: English + 2 Relevant (Math/Science/Humanities depending on course) + 2 Best
        // For simplicity, we'll calculate a generic ELR2B2 using Math/Science/Humanities as R2
        let elr2b2RawScore = 0;
        let elr2b2Subjects = [];
        let polyPool = [...pool];
        
        // Force English as L1 for Poly
        let polyL1 = english > 0 ? english : 0;
        
        if (polyL1 > 0) {
            // Find 2 Relevant (Math/Science/Humanities)
            for (let i = 0; i < 2; i++) {
                let rIndex = polyPool.findIndex(s => s.type === "Math" || s.type === "Science" || s.type === "Humanities");
                if (rIndex !== -1) {
                    elr2b2Subjects.push(polyPool[rIndex]);
                    polyPool.splice(rIndex, 1);
                }
            }

            // Find 2 Best
            for (let i = 0; i < 2; i++) {
                if (polyPool.length > 0) {
                    elr2b2Subjects.push(polyPool[0]);
                    polyPool.splice(0, 1);
                }
            }

            if (elr2b2Subjects.length === 4) {
                elr2b2RawScore = polyL1 + elr2b2Subjects.reduce((sum, s) => sum + s.grade, 0);
                elr2b2Raw.textContent = elr2b2RawScore;
                
                // Poly bonus points are usually just CCA (max 2)
                let polyBonus = Math.min(2, ccaBonus);
                elr2b2Net.textContent = Math.max(0, elr2b2RawScore - polyBonus);
            } else {
                elr2b2Raw.textContent = "N/A";
                elr2b2Net.textContent = "N/A";
            }
        } else {
            elr2b2Raw.textContent = "N/A";
            elr2b2Net.textContent = "N/A";
        }

        // Generate Breakdown HTML
        let breakdownHTML = `<strong>L1R5 Breakdown:</strong><br>`;
        if (r5Subjects.length === 5) {
            breakdownHTML += `L1: ${l1Name} (${l1})<br>`;
            r5Subjects.forEach(s => {
                breakdownHTML += `R: ${s.name} (${s.grade})<br>`;
            });
            breakdownHTML += `<em>Bonus Deductions: -${totalBonus}</em>`;
        } else {
            breakdownHTML += `<em>Not enough valid subjects to calculate L1R5. You need L1 + 1 Math/Science + 1 Humanities + 1 Humanities/Math/Science + 2 Any.</em>`;
        }

        breakdownDiv.innerHTML = breakdownHTML;
        resultsSection.style.display = 'block';
        
        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    });
});