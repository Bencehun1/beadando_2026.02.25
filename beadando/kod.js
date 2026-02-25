const termekek = [
	{
		nev: 'Kingston HyperX Predator 16GB (4x4GB) DDR4 3200MHz HX432C16PB3K4/16',
		kep: 'RAM.jpg',
	},
	{
		nev: 'LG 27MP59G-P Monitor',
		kep: 'monitor.jpg',
	},
	{
		nev: 'Western Digital Red 3.5" 2TB 5400rpm 64MB SATA3 WD20EFRX',
		kep: 'HDD.jpg',
	},
	{
		nev: 'Samsung 970 EVO 500GB M.2 PCIe MZ-V7E500BW',
		kep: 'SSD.jpg',
	},
	{
		nev: 'Chieftec Smart 500W (GPS-500A8)',
		kep: 'tap.jpg',
	},
];

window.addEventListener('DOMContentLoaded', () => {
	const tbody = document.querySelector('#termekTabla tbody');
	if (!tbody) return;

	termekek.forEach((t, idx) => {
		const tr = document.createElement('tr');
		tr.className = 'termekek';
		tr.addEventListener('click', () => kivalaszt(idx));

		const tdNev = document.createElement('td');
		tdNev.textContent = t.nev;

		const tdKep = document.createElement('td');
		const img = document.createElement('img');
		img.className = 'kiskep';
		img.src = t.kep;
		img.alt = t.nev;

		img.addEventListener('mouseover', () => nagyitKep(img));
		img.addEventListener('mouseout', () => visszaKep());

		img.addEventListener('click', (e) => {
			// ne fusson le kétszer (kép katt + sor katt)
			e.stopPropagation();
			kivalaszt(idx);
		});

		tdKep.appendChild(img);

		tr.appendChild(tdNev);
		tr.appendChild(tdKep);
		tbody.appendChild(tr);
	});
});

function nagyitKep(melyikKep) {
	document.getElementById('nagykep').src = melyikKep.src;
}

function visszaKep() {
	document.getElementById('nagykep').src = 'ures.jpg';
}

function kivalaszt(melyikTermek) {
	const termek = termekek[melyikTermek];
	if (!termek) return;

	const valasz = prompt('Hány darabot szeretnél?', '1');
	if (valasz === null) return;

	const db = parseInt(valasz, 10);
	if (!Number.isFinite(db) || db <= 0) {
		alert('Adj meg egy pozitív egész számot!');
		return;
	}

	const kosar = document.getElementById('kosar');
	const p = document.createElement('p');
	p.textContent = `${db} db ${termek.nev}`;
	kosar.appendChild(p);
}