'use client'
import OptionCheckbox from '@/components/OptionCheckbox'
import OptionNumber from '@/components/OptionNumber'
import OptionSelect from '@/components/OptionSelect'
import OptionText from '@/components/OptionText'
import FileSettingsIcon from '@/icons/FileSettingsIcon'
import { ServerConfig } from '@/types/types.d'
import { useEffect, useState } from 'react'

export default function Options() {
  const [config, setConfig] = useState<ServerConfig | null>(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/config')
      .then((res) => res.json())
      .then((data) => {
        setConfig(data)
      })
      .catch((err) => console.error('Error fetching config:', err))
  }, [])

  return (
    <>
      <div className="w-2/3 overflow-auto pt-4 font-bold">
        <h1 className="text-center text-2xl text-accent md:text-4xl">
          Options
        </h1>
        <div className="mt-4 flex min-w-96 flex-col border-4 border-solid border-secondary-light p-4">
          <div className="flex items-center text-lg md:text-2xl">
            <div className="text-accent">
              <FileSettingsIcon />
            </div>
            <div className="text-accent">
              <p>server.properties</p>
            </div>
          </div>
          <div className="mt-4 grid h-[40rem] grid-cols-1 gap-8 overflow-auto text-secondary-light md:grid-cols-2">
            <OptionNumber
              optionId="max-players"
              optionDesc="Max Players"
              optionKey="max-players"
              optionValue={parseInt(config?.['max-players'] || '20')}
              minValue={1}
              maxValue={999}
            />
            <OptionSelect
              optionId="gamemode"
              optionDesc="Gamemode"
              optionKey="gamemode"
              optionValue={config?.['gamemode'] || 'survival'}
              selectOptions={[
                { value: 'survival', label: 'Survival' },
                { value: 'creative', label: 'Creative' },
                { value: 'adventure', label: 'Adventure' },
                { value: 'spectator', label: 'Spectator' },
              ]}
            />
            <OptionSelect
              optionId="difficulty"
              optionDesc="Difficulty"
              optionKey="difficulty"
              optionValue={config?.['difficulty'] || 'easy'}
              selectOptions={[
                { value: 'peaceful', label: 'Peaceful' },
                { value: 'easy', label: 'Easy' },
                { value: 'normal', label: 'Normal' },
                { value: 'hard', label: 'Hard' },
              ]}
            />
            <OptionCheckbox
              optionId="hardcore"
              optionDesc="Hardcore"
              optionKey="hardcore"
              optionValue={config?.['hardcore'] || 'false'}
            />
            <OptionCheckbox
              optionId="white-list"
              optionDesc="Whitelist"
              optionKey="white-list"
              optionValue={config?.['white-list'] || 'false'}
            />
            <OptionCheckbox
              optionId="online-mode"
              optionDesc="Cracked"
              optionKey="online-mode"
              optionValue={config?.['online-mode'] || 'false'}
            />
            <OptionCheckbox
              optionId="pvp"
              optionDesc="PVP"
              optionKey="pvp"
              optionValue={config?.['pvp'] || 'true'}
            />
            <OptionNumber
              optionId="view-distance"
              optionDesc="View Distance"
              optionKey="view-distance"
              optionValue={parseInt(config?.['view-distance'] || '10')}
              minValue={2}
              maxValue={64}
            />
            <OptionNumber
              optionId="simulation-distance"
              optionDesc="Simulation Distance"
              optionKey="simulation-distance"
              optionValue={parseInt(config?.['simulation-distance'] || '10')}
              minValue={2}
              maxValue={64}
            />
            <OptionCheckbox
              optionId="commands-blocks"
              optionDesc="Commands Blocks"
              optionKey="commands-blocks"
              optionValue={config?.['commands-blocks'] || 'true'}
            />
            <OptionCheckbox
              optionId="allow-flight"
              optionDesc="Allow Flight"
              optionKey="allow-flight"
              optionValue={config?.['allow-flight'] || 'false'}
            />
            <OptionCheckbox
              optionId="spawn-animals"
              optionDesc="Spawn Animals"
              optionKey="spawn-animals"
              optionValue={config?.['spawn-animals'] || 'true'}
            />
            <OptionCheckbox
              optionId="spawn-monsters"
              optionDesc="Spawn Monsters"
              optionKey="spawn-monsters"
              optionValue={config?.['spawn-monsters'] || 'true'}
            />
            <OptionCheckbox
              optionId="spawn-npcs"
              optionDesc="Spawn NPCs"
              optionKey="spawn-npcs"
              optionValue={config?.['spawn-npcs'] || 'true'}
            />
            <OptionCheckbox
              optionId="allow-nether"
              optionDesc="Allow Nether"
              optionKey="allow-nether"
              optionValue={config?.['allow-nether'] || 'true'}
            />
            <OptionCheckbox
              optionId="force-gamemode"
              optionDesc="Force Gamemode"
              optionKey="force-gamemode"
              optionValue={config?.['force-gamemode'] || 'false'}
            />
            <OptionNumber
              optionId="spawn-protection"
              optionDesc="Spawn Protection"
              optionKey="spawn-protection"
              optionValue={parseInt(config?.['spawn-protection'] || '16')}
              minValue={0}
              maxValue={30000000}
            />
            <OptionCheckbox
              optionId="require-resource-pack"
              optionDesc="Require Resource Pack"
              optionKey="require-resource-pack"
              optionValue={config?.['require-resource-pack'] || 'false'}
            />
            <OptionText
              optionId="resource-pack"
              optionDesc="Resource Pack"
              optionKey="resource-pack"
              optionValue={config?.['resource-pack'] || ''}
            />
          </div>
        </div>
      </div>
    </>
  )
}
