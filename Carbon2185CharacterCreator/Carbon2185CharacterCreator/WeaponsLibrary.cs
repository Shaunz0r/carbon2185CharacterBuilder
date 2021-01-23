using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Linq;

namespace Carbon2185CharacterCreator
{
    class WeaponsLibrary
    {
        public WeaponsLibrary()
        {
            string line;
            List<Weapon> allWeapons = new List<Weapon>();
            FileStream weaponsCSV = new FileStream("../../Resources/Carbon2185Weapons.csv", FileMode.Open);
            StreamReader streamReader = new StreamReader(weaponsCSV);
            line = streamReader.ReadLine();
            while ((line = streamReader.ReadLine()) != null)
            {
                string[] weaponBuilder = line.Split(",");
                Weapon newWeapon = new Weapon(weaponBuilder[0], weaponBuilder[1], weaponBuilder[2], weaponBuilder[3], weaponBuilder[4], weaponBuilder[5], weaponBuilder[6], weaponBuilder[7]);
                allWeapons.Add(newWeapon);
            }
            Console.WriteLine("Weapons:");
            foreach (Weapon weapon in allWeapons)
            {
                Console.WriteLine(weapon.Prettify());
            }
            streamReader.Close();
         }
     }
}