export const useDoctor = defineStore("doctorsList", () => {
  const doctorsList = ref([
    {
      name: "Lionel Messi",
      email: "messi@gmail.com",
      phone: "+8801700123456",
      address: "Mirpur, Dhaka",
      doctorId: 1,
    },
    {
      name: "Sergio Busquets",
      email: "busi@gmail.com",
      phone: "+8801700125555",
      address: "Mirpur, Dhaka",
      doctorId: 2,
    },
    {
      name: "Pep Guardiola",
      email: "pep@gmail.com",
      phone: "+8801700123687",
      address: "Mirpur, Dhaka",
      doctorId: 3,
    },
    {
      name: "Ronald Koeman",
      email: "koeman@gmail.com",
      phone: "+8801700123687",
      address: "Mirpur, Dhaka",
      doctorId: 4,
    },
    {
      name: "Ronald Araujo",
      email: "araujo@gmail.com",
      phone: "+8801700123687",
      address: "Mirpur, Dhaka",
      doctorId: 5,
    },
    {
      name: "Emi Martinez",
      email: "martinez@gmail.com",
      phone: "+8801700123111",
      address: "Mirpur-12, Dhaka",
      doctorId: 6,
    },
    {
      name: "Di Maria",
      email: "maria@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-12, Dhaka",
      doctorId: 7,
    },
    {
      name: "Joules Kounde",
      email: "kounde@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-11, Dhaka",
      doctorId: 8,
    },
    {
      name: "Di Stefano",
      email: "di@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-10, Dhaka",
      doctorId: 9,
    },
    {
      name: "Luis Suarez",
      email: "suarez@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-12, Dhaka",
      doctorId: 10,
    },
    {
      name: "Pablo Gavi",
      email: "gavi@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-12, Dhaka",
      doctorId: 11,
    },
    {
      name: "Luis Enrique",
      email: "suarez@gmail.com",
      phone: "+8801700444456",
      address: "Uttara, Dhaka",
      doctorId: 12,
    },
    {
      name: "Luis Menotti",
      email: "menotti@gmail.com",
      phone: "+8801700444456",
      address: "Uttara, Dhaka",
      doctorId: 13,
    },
    {
      name: "Diego Maradona",
      email: "d10@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-10, Dhaka",
      doctorId: 14,
    },
    {
      name: "Johan Cruyff",
      email: "johan@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-12, Dhaka",
      doctorId: 15,
    },
    {
      name: "Luis Scolari",
      email: "luis@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-12, Dhaka",
      doctorId: 16,
    },
    {
      name: "Robert Lewandowski",
      email: "lewa@gmail.com",
      phone: "+8801700444456",
      address: "Uttara, Dhaka",
      doctorId: 17,
    },
    {
      name: "Xavi Hernandez",
      email: "xavi@gmail.com",
      phone: "+8801700444456",
      address: "Uttara, Dhaka",
      doctorId: 18,
    },
    {
      name: "Diego Armando",
      email: "d10@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-10, Dhaka",
      doctorId: 19,
    },
    {
      name: "Jordi Cruyff",
      email: "jordi@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-12, Dhaka",
      doctorId: 20,
    },
    {
      name: "Lionel Andres",
      email: "messi@gmail.com",
      phone: "+8801700123456",
      address: "Mirpur, Dhaka",
      doctorId: 21,
    },
    {
      name: "Sergio Roberto",
      email: "roberto@gmail.com",
      phone: "+8801700125555",
      address: "Mirpur, Dhaka",
      doctorId: 22,
    },
    {
      name: "Pedri",
      email: "pedri@gmail.com",
      phone: "+8801700123687",
      address: "Mirpur, Dhaka",
      doctorId: 23,
    },
    {
      name: "Edgar Davids",
      email: "davids@gmail.com",
      phone: "+8801700123687",
      address: "Mirpur, Dhaka",
      doctorId: 24,
    },
    {
      name: "Jordi Alba",
      email: "alba@gmail.com",
      phone: "+8801700123687",
      address: "Mirpur, Dhaka",
      doctorId: 25,
    },
  ]);
  const { allWorkplace } = storeToRefs(useHospitalAssignment());
  const { hospitals } = storeToRefs(useHospitals());

  const findWorkplace = (id) => {
    const individualWorkplace = allWorkplace.value.filter(
      (doctor) => doctor.doctorId === id
    );

    let workplace = [];
    individualWorkplace.filter((work) => {
      hospitals.value.filter((hospital) =>
        hospital.hospitalId === work.hospitalId
          ? workplace.push(hospital.name)
          : ""
      );
    });
    doctorsList.value.filter((doctor) =>
      doctor.doctorId === id ? (doctor.workplace = workplace) : ""
    );
  };

  return {
    doctorsList,
    findWorkplace,
  };
});
