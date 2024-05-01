import OptionCheckbox from '@/components/OptionCheckbox'
import OptionNumber from '@/components/OptionNumber'
import OptionSelect from '@/components/OptionSelect'
import OptionText from '@/components/OptionText'
import FileSettingsIcon from '@/icons/FileSettingsIcon'

export default function Options() {
  // const maxPlayersOptions = { optionId: 'max-players', optionDesc: 'Max Players', optionKey: 'max-players', optionValue: '20', minValue: '1', maxValue: '999' }
  // const gamemodeOptions = { optionId: 'gamemode', optionDesc: 'Gamemode', optionKey: 'gamemode', optionValue: 'survival', selectOptions: [{ value: 'survival', label: 'Survival' }, { value: 'creative', label: 'Creative' }, { value: 'adventure', label: 'Adventure' }] }
  // const difficultyOptions = { optionId: 'difficulty', optionDesc: 'Difficulty', optionKey: 'difficulty', optionValue: 'easy', selectOptions: [{ value: 'peaceful', label: 'Peaceful' }, { value: 'easy', label: 'Easy' }, { value: 'normal', label: 'Normal' }, { value: 'hard', label: 'Hard' }] }
  // const hardcoreOptions = { optionId: 'hardcore', optionDesc: 'Hardcore', optionKey: 'hardcore', optionValue: 'false' }
  // const whitelistOptions = { optionId: 'whitelist', optionDesc: 'Whitelist', optionKey: 'white-list', optionValue: 'false' }
  // const onlineModeOptions = { optionId: 'online-mode', optionDesc: 'Cracked', optionKey: 'online-mode', optionValue: 'false' }
  // const pvpOptions = { optionId: 'pvp', optionDesc: 'PVP', optionKey: 'pvp', optionValue: 'true' }
  // const viewDistanceOptions = { optionId: 'view-distance', optionDesc: 'View Distance', optionKey: 'view-distance', optionValue: '10', minValue: '2', maxValue: '64' }
  // const simulationDistanceOptions = { optionId: 'simulation-distance', optionDesc: 'Simulation Distance', optionKey: 'simulation-distance', optionValue: '8', minValue: '0', maxValue: '32' }
  // const difficultyLockedOptions = { optionId: 'difficulty-locked', optionDesc: 'Difficulty Locked', optionKey: 'difficulty-locked', optionValue: 'false' }
  // const commandsBlocksOptions = { optionId: 'command-blocks', optionDesc: 'Command Blocks', optionKey: 'command-blocks', optionValue: 'true' }
  // const allowFlightOptions = { optionId: 'allow-flight', optionDesc: 'Allow Flight', optionKey: 'allow-flight', optionValue: 'false' }
  // const spawnAnimalsOptions = { optionId: 'spawn-animals', optionDesc: 'Spawn Animals', optionKey: 'spawn-animals', optionValue: 'true' }
  // const spawnNpcsOptions = { optionId: 'spawn-npcs', optionDesc: 'Spawn NPCs', optionKey: 'spawn-npcs', optionValue: 'true' }
  // const allowNetherOptions = { optionId: 'allow-nether', optionDesc: 'Allow Nether', optionKey: 'allow-nether', optionValue: 'true' }
  // const forceGamemodeOptions = { optionId: 'force-gamemode', optionDesc: 'Force Gamemode', optionKey: 'force-gamemode', optionValue: 'false' }
  // const spawnProtectionOptions = { optionId: 'spawn-protection', optionDesc: 'Spawn Protection', optionKey: 'spawn-protection', optionValue: '16' }
  // const requireResourcePacksOptions = { optionId: 'resource-packs', optionDesc: 'Resource Packs', optionKey: 'resource-packs', optionValue: 'false' }
  // const resourcePackUrlOptions = { optionId: 'resource-pack-url', optionDesc: 'Resource Pack URL', optionKey: 'resource-pack-url', optionValue: '' }
  return (
    <>
      <div className="w-2/3">
        <h1 className="text-center text-3xl">Options</h1>
        <div className="mt-4 flex min-w-96 flex-col border-2 border-solid border-white p-4">
          <div className="flex items-center text-2xl">
            <div className="">
              <FileSettingsIcon />
            </div>
            <div className="">
              <p>server.properties</p>
            </div>
          </div>
          <div className="mt-4 grid h-[40rem] grid-cols-2 gap-8 overflow-auto">
            <OptionNumber
              optionId="max-players"
              optionDesc="Max Players"
              optionKey="max-players"
              optionValue={20}
              minValue={1}
              maxValue={999}
            />
            <OptionSelect
              optionId="gamemode"
              optionDesc="Gamemode"
              optionKey="gamemode"
              optionValue="survival"
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
              optionValue="easy"
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
              optionValue="false"
            />
            <OptionCheckbox
              optionId="whitelist"
              optionDesc="Whitelist"
              optionKey="white-list"
              optionValue="false"
            />
            <OptionCheckbox
              optionId="online-mode"
              optionDesc="Cracked"
              optionKey="online-mode"
              optionValue="false"
            />
            <OptionCheckbox
              optionId="pvp"
              optionDesc="PVP"
              optionKey="pvp"
              optionValue="true"
            />
            <OptionNumber
              optionId="view-distance"
              optionDesc="View Distance"
              optionKey="view-distance"
              optionValue={10}
              minValue={2}
              maxValue={64}
            />
            <OptionNumber
              optionId="simulation-distance"
              optionDesc="Simulation Distance"
              optionKey="simulation-distance"
              optionValue={10}
              minValue={2}
              maxValue={64}
            />
            <OptionCheckbox
              optionId="commands-blocks"
              optionDesc="Commands Blocks"
              optionKey="commands-blocks"
              optionValue="true"
            />
            <OptionCheckbox
              optionId="allow-flight"
              optionDesc="Allow Flight"
              optionKey="allow-flight"
              optionValue="false"
            />
            <OptionCheckbox
              optionId="spawn-animals"
              optionDesc="Spawn Animals"
              optionKey="spawn-animals"
              optionValue="true"
            />
            <OptionCheckbox
              optionId="spawn-monsters"
              optionDesc="Spawn Monsters"
              optionKey="spawn-monsters"
              optionValue="true"
            />
            <OptionCheckbox
              optionId="spawn-npcs"
              optionDesc="Spawn NPCs"
              optionKey="spawn-npcs"
              optionValue="true"
            />
            <OptionCheckbox
              optionId="allow-nether"
              optionDesc="Allow Nether"
              optionKey="allow-nether"
              optionValue="true"
            />
            <OptionCheckbox
              optionId="force-gamemode"
              optionDesc="Force Gamemode"
              optionKey="force-gamemode"
              optionValue="false"
            />
            <OptionNumber
              optionId="spawn-protection"
              optionDesc="Spawn Protection"
              optionKey="spawn-protection"
              optionValue={16}
              minValue={0}
              maxValue={30000000}
            />
            <OptionCheckbox
              optionId="require-resource-pack"
              optionDesc="Require Resource Pack"
              optionKey="require-resource-pack"
              optionValue="false"
            />
            <OptionText
              optionId="resource-pack"
              optionDesc="Resource Pack"
              optionKey="resource-pack"
              optionValue=""
            />
          </div>
        </div>
      </div>
    </>
  )
}
